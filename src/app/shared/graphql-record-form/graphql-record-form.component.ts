import { Component, Inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Apollo, gql, MutationResult } from 'apollo-angular';
import { capitalizeFirstLetter, GraphqlCollectionResponse, GraphqlService, toLowercaseFirstLetter } from '../services/graphql.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrService } from 'ngx-toastr';
import { MatError } from '@angular/material/form-field'
import { FormComponent } from '../components/form/form.component';
import { GraphqlFormComponent } from '../components/graphql-form/graphql-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { ErrorAlertComponent } from '../components/error-alert/error-alert.component';

@Component({
  selector: 'app-graphql-record-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatError,
    FormlyModule,
    ErrorAlertComponent,
    RouterLink,
    RouterLinkActive,
    FormlyMatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './graphql-record-form.component.html',
  styleUrl: './graphql-record-form.component.scss'
})
export class GraphqlRecordFormComponent<M, I> extends GraphqlFormComponent<I> implements OnInit, OnChanges, OnDestroy {
  constructor(
    private graphqlService: GraphqlService,
    private dialogRef: MatDialogRef<GraphqlRecordFormComponent<M, I>>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super();
    // this.formGroup?.setValue({});
    dialogRef.disableClose = true;
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title;
      this.type = this.data.type;
      this.model = this.data.model;
      this.fields = this.data.fields;
      this.id = this.data.id;
      this.isEditMode = !!this.id;
      this.oldRecord = this.model;
      
      this.recordFetchQuery = this.data.recordFetchQuery;
      this.recordCreateMutation = this.data.recordCreateMutation;
      this.recordUpdateMutation = this.data.recordUpdateMutation;
    }
    // this.updateControls();

    if (this.isEditMode) {
      this.isLoading = true;
      this.form.disable();
      const variables = {
        id: this.id,
      }
      this.graphqlService.getGqlQueryObservable(this.recordFetchQuery, variables).subscribe({
        next: (res: GraphqlCollectionResponse<M>) => {
          this.isLoading = false;
          const model = res.data[this.type];
          this.form.patchValue(model);
          this.oldRecord = this.form.value;
          this.form.enable();
        },
        error: err => {
          this.isLoading = false;
          this.toastr.error(`Could not load details`, this.type);
        }
      });
    }

    this.dialogRef.beforeClosed().pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['formGroup'] || changes['controlMetadata']) {
    //   this.updateControls();
    // }
  }

  // getControlType(metadata: any): string {
  //   return metadata?.type || 'text';
  // }

  isFormArray(control: AbstractControl): boolean {
    return control instanceof FormArray;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      //show toast message
      return;
    }

    for (const key in this.model) {
      if (Object.prototype.hasOwnProperty.call(this.model, key)) {
        const value = this.model[key];
  
        // Check if the property value is an object and contains a `value` property
        if (value && typeof value === 'object' && 'value' in value) {
          // Ensure TypeScript knows `value` is a property of the value
          this.model[key] = (value as { value: any }).value;
        }
      }
    }
    
    const mutation = this.isEditMode ? this.recordUpdateMutation : this.recordCreateMutation;

    const variables = {
      input: this.model,
    };

    // const refetchQueries = [this.collectionKey, this.typeKey];
    
    this.graphqlService.getGqlMutationObservable(mutation, variables).subscribe({
      next: ({ data, errors, loading }) => {
        if (errors) {
          this.toastr.error(`Could not ${this.isEditMode ? 'update' : 'create'} record`, this.type);
        }
        if (data) {
          this.toastr.success(`Record ${this.isEditMode ? 'updated' : 'created'}`, this.type);
          if (this.isAddAnother) {
            this.form.reset();
            return;
          }
          this.oldRecord = this.model;
          this.closeModal();
        }
      },
      error: err => {
        this.toastr.error(`Error occured`, this.type);
        console.log(err);
      }
    });
  }

  closeModal(): void {
    // const oldValue = JSON.stringify(this.oldRecord);
    // const newRecord = this.getFormattedInput(this.model);
    // const newValue = JSON.stringify(newRecord);
    // if (oldValue != newValue) {
    //   if (!confirm("Are you sure you want to close without saving your changes?")) {
    //     return;
    //   }
    //   this.toastr.warning(`Changes were not saved`, this.typeName);
    // }
    this.dialogRef.close(this.model);
  }

}

