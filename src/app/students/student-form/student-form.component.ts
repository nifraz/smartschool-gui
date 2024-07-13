import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService, Student } from '../students.service';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  //id?: string | null;
  
  isLoading: boolean = false;
  isEdit: boolean = false;
  isAddAnother: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.studentForm = this.formBuilder.group({
      id: [''],
      studentId: ['', Validators.required],
      fullName: ['', Validators.required],
      nickName: [''],
      dateOfBirth: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,12}$')]]
    });
  }

  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    if (this.data.isEdit && this.data.id) {
      const student = this.studentsService.getStudentById(this.data.id);
      if (student) {
        // Convert dateOfBirth to string in YYYY-MM-DD format
        const formattedDate = student.dateOfBirth.toISOString().split('T')[0];
        this.studentForm.patchValue({ ...student, dateOfBirth: formattedDate });
      }
    }
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const studentData: Student = {
        ...this.studentForm.value,
        // Convert dateOfBirth string in YYYY-MM-DD to Date format
        dateOfBirth: new Date(this.studentForm.value.dateOfBirth),
      };

      if (this.isEdit) {
        this.studentsService.updateStudent(studentData);
        this.closeModal();
      } else {
        this.studentsService.createStudent(studentData);
        if (this.isAddAnother) {
          //reset the form

        }
        else {
          this.closeModal();
        }
      }
    }
  }

  closeModal(): void {
    this.dialogRef.close(this.studentForm.value);
  }
}
