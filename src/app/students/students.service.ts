import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';
import { SexType, SortEnumType, StudentInput } from '../../../graphql/generated';
import { enumToArray, GraphqlService, InputDef } from '../shared/services/graphql.service';

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
        options: enumToArray(SexType),
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
      {
        field: 'email',
        type: 'text',
        caption: 'Email',
        required: false,
        class: '',
      },
      {
        field: 'nicNo',
        type: 'text',
        caption: 'NIC No',
        required: false,
        class: '',
      },
      {
        field: 'nickname',
        type: 'text',
        caption: 'Nickname',
        required: false,
        class: '',
      },
      {
        field: 'passportNo',
        type: 'text',
        caption: 'Passport No',
        required: false,
        class: '',
      },
      {
        field: 'address',
        type: 'text',
        caption: 'Address',
        required: false,
        class: '',
      },
      {
        field: 'bcNo',
        type: 'text',
        caption: 'BC No',
        required: false,
        class: '',
      },
    ];
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

