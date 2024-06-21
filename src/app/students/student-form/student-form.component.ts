import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService, Student } from '../students.service';
import { CommonModule } from '@angular/common';

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
  isEditMode: boolean = false;
  id?: string | null;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      id: [''],
      studentId: ['', Validators.required],
      fullName: ['', Validators.required],
      nickName: [''],
      dateOfBirth: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,12}$')]]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEditMode = true;
      const student = this.studentsService.getStudentById(this.id);
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

      if (this.isEditMode) {
        this.studentsService.updateStudent(studentData);
        this.router.navigate(['/students', studentData.id]);
      } else {
        this.studentsService.createStudent(studentData);
        this.router.navigate(['/students', studentData.id]);
      }
    }
  }
}
