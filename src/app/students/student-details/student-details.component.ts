import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../students.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../shared/not-found/not-found.component";

@Component({
    selector: 'app-student-details',
    standalone: true,
    templateUrl: './student-details.component.html',
    styleUrl: './student-details.component.scss',
    imports: [
        CommonModule,
        NotFoundComponent
    ]
})
export class StudentDetailsComponent implements OnInit {

  deleteStudent() {
    throw new Error('Method not implemented.');
  }
  editStudent() {
    throw new Error('Method not implemented.');
  }

  id?: string | null;
  student?: Student;

  constructor(
    private StudentsService: StudentsService,
    private activatedRoute: ActivatedRoute,
  ) {
    // this.activatedRoute.params.subscribe(params => {
    //   this.id = params['id'];
    // });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      const student = this.StudentsService.getStudents().find(x => x.id == this.id);
      if (student) {
        this.student = student;
      }
    }
  }
}
