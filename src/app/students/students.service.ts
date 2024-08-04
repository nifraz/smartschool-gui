import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';
import { SexType, SortEnumType, StudentInput } from '../../../graphql/generated';
import { enumToArray, GraphqlService, InputDef } from '../shared/services/graphql.service';
import { map, Observable, switchMap, timer } from 'rxjs';

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

  // validators.push(Validators.required);
  // validators.push(Validators.pattern(x.pattern));

  getStudentInputDefs(lang: string = 'en-US'): InputDef<StudentInput>[] {
    return [
      {
        field: 'fullName',
        type: 'text',
        caption: 'Full Name',
        validators: [Validators.required],
      },
      {
        field: 'shortName',
        type: 'text',
        caption: 'Short Name',
        validators: [Validators.required],
      },
      {
        field: 'nickname',
        type: 'text',
        caption: 'Nickname',
      },
      {
        field: 'dateOfBirth',
        type: 'date',
        caption: 'Date of Birth',
      },
      {
        field: 'sex',
        type: 'select',
        caption: 'Sex',
        options: enumToArray(SexType),
        validators: [Validators.required],
      },
      {
        field: 'contactNo',
        type: 'text',
        caption: 'Contact No',
        // validators: [Validators.pattern('^\\+?[0-9]{10,12}$')],
      },
      {
        field: 'email',
        type: 'text',
        caption: 'Email',
        // asyncValidators: [this.studentEmailValidator()],
      },
      {
        field: 'bcNo',
        type: 'text',
        caption: 'BC No',
      },
      {
        field: 'nicNo',
        type: 'text',
        caption: 'NIC No',
      },
      {
        field: 'passportNo',
        type: 'text',
        caption: 'Passport No',
      },
      {
        field: 'address',
        type: 'textarea',
        caption: 'Address',
      },
    ];
  }

  checkIfStudentEmailExists(email: string): Observable<boolean> {
    return this.graphqlService.getGqlQueryObservable(GET_STUDENT_EMAILS_COUNT, {email}).pipe(
      map((res: any) => !!res.data['students']?.totalCount)
    );
  }

  studentEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return this.checkIfStudentEmailExists(control.value).pipe(
          map((result: boolean) => result ? { invalid: true } : null)
        )
    };
  }
}

export const GET_STUDENT_EMAILS_COUNT = `
  query getStudentEmailsCount($email: String!) {
    students(
      skip: 0
      take: 1
      where: { and: [{email: {eq: $email}}] } 
    ) {
      totalCount
    }
  }
`;

export const GET_STUDENT = `
  query getStudent($id: Long!) {
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

