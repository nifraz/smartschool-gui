import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
 
  constructor() { }

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
}

export interface Student {
  id: number,
  studentId: string,
  fullName: string,
  nickName: string,
  dateOfBirth: Date,
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