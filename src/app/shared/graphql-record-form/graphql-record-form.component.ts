import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Apollo, gql, MutationResult } from 'apollo-angular';
import { capitalizeFirstLetter, GraphqlService, toLowercaseFirstLetter } from '../services/graphql.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-graphql-record-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  templateUrl: './graphql-record-form.component.html',
  styleUrl: './graphql-record-form.component.scss'
})
export class GraphqlRecordFormComponent<T extends object> implements OnInit, OnChanges {
  collectionKey: string = '';
  typeKey: string = '';
  typeName: string = '';
  id: number = 0;
  record?: T;
  newRecord?: T;

  formGroup: FormGroup<any> = new FormGroup<any>({});
  controlMetadata: { [key: string]: any } = {};
  controls: { key: string, control: AbstractControl | null, metadata: any }[] = [];

  loading: boolean = false;
  editMode: boolean = false;
  addAnother: boolean = false;

  constructor(
    private graphqlService: GraphqlService,
    private apollo: Apollo,
    private dialogRef: MatDialogRef<GraphqlRecordFormComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.formGroup?.setValue({});
  }

  ngOnInit(): void {
    this.collectionKey = toLowercaseFirstLetter(this.data.collection);
    this.typeName = capitalizeFirstLetter(this.data.type);
    this.typeKey = toLowercaseFirstLetter(this.data.type);
    this.formGroup = this.data.formGroup;
    this.controlMetadata = this.data.controlMetadata;
    this.id = this.data.id ? +this.data.id : 0;
    this.editMode = !!this.data.id;

    this.updateControls();

    if (this.editMode) {
      this.loading = true;
      this.formGroup.disable();
      const recordQuery = this.constructRecordQuery();
      const variables = {
        id: this.id,
      }
      this.graphqlService.getGqlQueryObservable(recordQuery, variables).subscribe({
        next: res => {
          this.loading = false;
          const record = {...res.data[this.typeKey]};
          Object.keys(record).forEach(key => { //review
            if (this.controlMetadata[key] && this.controlMetadata[key].type == 'date') {
              record[key] = record[key].split('T')[0];
            }
          });
          this.formGroup.patchValue(record);
          this.formGroup.enable();
          console.log(res);
        },
        error: err => {
          this.loading = false;
          console.error(err);
        }
      })
      // const student = this.studentsService.getStudentById(this.id);
      // if (student) {
      //   // Convert dateOfBirth to string in YYYY-MM-DD format
      //   const formattedDate = student.dateOfBirth.toISOString().split('T')[0];
      //   this.studentForm.patchValue({ ...student, dateOfBirth: formattedDate });
      // }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formGroup'] || changes['controlMetadata']) {
      this.updateControls();
    }
  }

  updateControls(): void {
    this.controls = Object.keys(this.formGroup.controls).map(key => ({
      key,
      control: this.formGroup.get(key),
      metadata: this.controlMetadata[key]
    }));
  }

  getControlType(metadata: any): string {
    return metadata?.type || 'text';
  }

  isFormArray(control: AbstractControl): boolean {
    return control instanceof FormArray;
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      //show toast message
      return;
    }
    
    const mutation = this.editMode ? this.constructUpdateMutation() : this.constructCreateMutation();
    const variables = {
      id: this.id,
      input: {
        ...this.formGroup.value,
      },
    };

    const refetchQueries = [this.collectionKey, this.typeKey];
    
    this.graphqlService.getGqlMutationObservable(mutation, variables, refetchQueries).subscribe(({ data, errors, loading }) => {
      if (errors) {
        console.error(`Error occured while ${this.editMode ? 'updating' : 'creating'} ${this.typeName} record`, errors);
        // alert(`Error creating account: ${errors[0].message}`);
      }
      if (data) {
        console.log(`${this.typeName} record ${this.editMode ? 'updated' : 'created'}`, JSON.stringify(data, null, 2));
        if (this.addAnother) {
          //reset the form
          return;
        }
        this.closeModal();
      }
    });
  }

  constructRecordQuery(): string {
    const fields = Object.entries(this.controlMetadata)
      .map(([field, metaData]) => field)
      .join(', ');

    const query: string = `
      query ${this.typeKey}($id: Long!) {
        ${this.typeKey}(id: $id) {
          id,
          ${fields}
        }
      }
    `;
    console.log(query);
    return query;
  }

  constructCreateMutation(): string {
    const mutation: string = `
      mutation create${this.typeName}($input: ${this.typeName}Input!) {
        create${this.typeName}(input: $input) {
          id
        }
      }
    `;
    
    console.log(mutation);
    return mutation;
  }

  constructUpdateMutation(): string {
    const mutation: string = `
      mutation update${this.typeName}($id: Long!, $input: ${this.typeName}Input!) {
        update${this.typeName}(id: $id, input: $input) {
          id
        }
      }
    `;
    
    console.log(mutation);
    return mutation;
  }

  closeModal(): void {
    this.dialogRef.close(this.formGroup.value);
  }

}

