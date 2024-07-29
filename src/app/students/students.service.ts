import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';
import { SexType, SortEnumType, StudentInput } from '../../../graphql/generated';
import { GraphqlService, InputDef } from '../shared/services/graphql.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
 
  constructor(
    private formBuilder: FormBuilder,
    private graphqlService: GraphqlService,
  ) { }

  // getStudentInputFormGroup(): FormGroup<any> {
  //   const studentInput: StudentInput = {
  //     studentId: '',
  //   };
    
  //   const formGroup = this.graphqlService.createInputFormGroup(studentInput);
  //   formGroup.controls['studentId'].addValidators([Validators.required, ]);
  //   formGroup.controls['fullName'].addValidators([Validators.required, ]);
  //   formGroup.controls['nickName'].addValidators([]);
  //   formGroup.controls['dateOfBirth'].addValidators([Validators.required, ]);
  //   formGroup.controls['mobileNo'].addValidators([Validators.required, Validators.pattern('^\\+?[0-9]{10,12}$')]);

  //   return formGroup;
  // }

  getStudentInputDefs(lang: string = 'en-US'): InputDef<StudentInput>[] {
    return [
      {
        field: 'fullName',
        type: 'text',
        caption: 'Full Name',
        required: true,
        class: '',
      },
      {
        field: 'shortName',
        type: 'text',
        caption: 'Short Name',
        required: true,
        class: '',
      },
      {
        field: 'dateOfBirth',
        type: 'date',
        caption: 'Date of Birth',
        required: false,
        class: '',
      },
      {
        field: 'sex',
        type: 'select',
        caption: 'Sex',
        required: true,
        options: [
          {
            caption: 'Male',
            value: SexType.Male,
          },
          {
            caption: 'Female',
            value: SexType.Female,
          },
        ],
        class: '',
      },
      {
        field: 'contactNo',
        type: 'text',
        caption: 'Contact No',
        required: false,
        // pattern: '^\\+?[0-9]{10,12}$',
        class: '',
      },
    ];
    // return {
    //   id: {
    //     label: 'Student ID',
    //     type: 'text',
    //     class: 'col-md-6',
    //     // maxlength: 100,
    //   },
    //   fullName: {
    //     label: 'Full Name',
    //     type: 'text',
    //     class: 'col-md-6',
    //   },
    //   nickName: {
    //     label: 'Nick Name',
    //     type: 'text',
    //     class: 'col-md-6',
    //   },
    //   // email: {
    //   //   label: 'Email',
    //   //   type: 'email',
    //   //   class: 'col-md-6',
    //   // },
    //   dateOfBirth: {
    //     label: 'Date of Birth',
    //     type: 'date',
    //     class: 'col-md-6',
    //   },
    //   mobileNo: {
    //     label: 'Mobile No',
    //     type: 'text',
    //     class: 'col-md-6',
    //   },
    //   // sex: {
    //   //   label: 'Sex',
    //   //   type: 'select',
    //   //   class: 'col-md-6',
    //   //   options: [
    //   //     { value: 0, label: 'Not known' },
    //   //     { value: 1, label: 'Male' },
    //   //     { value: 2, label: 'Female' },
    //   //     { value: 9, label: 'Not applicable' },
    //   //   ]
    //   // },
    //   // acceptTerms: {
    //   //   label: 'I accept the terms and conditions',
    //   //   type: 'checkbox',
    //   //   class: 'col-md-6',
    //   // }
    // };
  }

}

export const STUDENT = `
  query student($id: Long!) {
    student(id: $id) {
      id
      address
      bcNo
      contactNo
      createdBy
      createdOn
      dateOfBirth
      email
      fullName
      guid
      lastModifiedBy
      lastModifiedOn
      nickname
      nicNo
      passportNo
      sex
      shortName
    }
  }
`;

