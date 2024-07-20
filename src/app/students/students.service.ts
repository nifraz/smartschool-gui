import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
 
  constructor(
    private formBuilder: FormBuilder
  ) { }

  getStudent(id: number): Student | undefined {
    // return this.students.find(x => x.id == id);
    return undefined;
  }

  createStudent(student: Student): boolean {
    // const existingStudent = this.students.find(x => x.id == student.id);
    // if (existingStudent) {
    //   return false;
    // }
    // student.id = Date.now().toString(); //change
    // this.students.push(student);
    return true;
  }

  updateStudent(student: Student): boolean {
    // let existingStudent = this.students.find(x => x.id == student.id);
    // if (!existingStudent) {
    //   return false;
    // }
    // this.students = this.students.map(x => 
    //   x.id === student.id ? student : x
    // );
    return true;
  }

  getStudentFormGroup(): FormGroup<any> {
    return this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // age: ['', [Validators.required, Validators.min(18)]],
      // gender: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue],
      studentId: ['', Validators.required],
      fullName: ['', Validators.required],
      nickName: [''],
      dateOfBirth: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,12}$')]]
    });
  }

  getStudentControlMetadata(lang: string = 'en-US'): { [key: string]: any } {
    return {
      studentId: {
        label: 'Student ID',
        type: 'text',
        class: 'col-md-6',
        // maxlength: 100,
      },
      fullName: {
        label: 'Full Name',
        type: 'text',
        class: 'col-md-6',
      },
      nickName: {
        label: 'Nick Name',
        type: 'text',
        class: 'col-md-6',
      },
      // email: {
      //   label: 'Email',
      //   type: 'email',
      //   class: 'col-md-6',
      // },
      dateOfBirth: {
        label: 'Date of Birth',
        type: 'date',
        class: 'col-md-6',
      },
      mobileNo: {
        label: 'Mobile No',
        type: 'text',
        class: 'col-md-6',
      },
      // sex: {
      //   label: 'Sex',
      //   type: 'select',
      //   class: 'col-md-6',
      //   options: [
      //     { value: 0, label: 'Not known' },
      //     { value: 1, label: 'Male' },
      //     { value: 2, label: 'Female' },
      //     { value: 9, label: 'Not applicable' },
      //   ]
      // },
      // acceptTerms: {
      //   label: 'I accept the terms and conditions',
      //   type: 'checkbox',
      //   class: 'col-md-6',
      // }
    };
  }

}



export const STUDENT_DETAILS = `
  query student($id: Long!) {
    student(id: $id) {
      id
      studentId
      fullName
      nickName
      dateOfBirth
      mobileNo
    }
  }
`;

export interface Student {
  id: number,
  studentId: string,
  fullName: string,
  nickName: string,
  dateOfBirth: Date,
  mobileNo: string,
}

export interface StudentInput {
  studentId: string,
  fullName: string,
  nickName: string,
  dateOfBirth: string,
  mobileNo: string,
}

export type SortOrder = 'ASC' | 'DESC';

export interface StudentFilter {
  [key: string]: any;
}

export interface StudentSort {
  [key: string]: SortOrder;
}

export interface StudentQueryResponse {
  students: Student[];
}