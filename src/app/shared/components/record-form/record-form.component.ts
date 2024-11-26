import { Component, EventEmitter, Inject, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { Apollo, gql, MutationResult, TypedDocumentNode } from 'apollo-angular';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrService } from 'ngx-toastr';
import { MatError } from '@angular/material/form-field'
import { FormComponent } from '../form/form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { ErrorAlertComponent } from '../error-alert/error-alert.component';
import { DocumentNode } from 'graphql';
import { FormlyOption } from '../../models';

@Component({
  selector: 'app-record-form',
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
    MatDialogContent
  ],
  templateUrl: './record-form.component.html',
  styleUrl: './record-form.component.scss'
})
export class RecordFormComponent<I> extends FormComponent<I> implements OnInit, OnChanges, OnDestroy {
  override loadData(): void {
    throw new Error('Method not implemented.');
  }

  @Input() submitLabel: string = 'Submit'; // Submit button label
  
  enableMultipleCreate: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<RecordFormComponent<I>>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super();
    // this.formGroup?.setValue({});
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title;
      this.model = this.data.model;
      this.fields = this.data.fields;
      this.id = this.data.id;
      this.isEditMode = !!this.id;
      this.submitLabel = this.data.submitLabel;
      // this.oldRecord = this.model;
      
    }
    // this.updateControls();

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
          this.model[key] = (value as FormlyOption).value;
        }
      }
    }
    
    this.dialogRef.close(this.model);
  }

  onClose(): void {
    this.dialogRef.close(this.model);
  }

}
