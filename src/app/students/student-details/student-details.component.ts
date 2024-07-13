import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../shared/not-found/not-found.component";
import { StudentFormComponent } from '../student-form/student-form.component';
import { MatDialog } from '@angular/material/dialog';

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

  openStudentFormModal(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const dialogRef = this.matDialog.open(StudentFormComponent, {
      width: '1000px',
      data: { isEdit: true, id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/students', this.id]);
      //reload data
      console.log(result);
    });
  }

  deleteStudent() {
    throw new Error('Method not implemented.');
  }

  editStudent() {
    this.router.navigate(['/students', this.id, 'edit']);
    // this.openStudentFormModal();
  }

  id?: string | null;
  student?: Student;

  constructor(
    private studentsService: StudentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog,
  ) {
    // this.activatedRoute.params.subscribe(params => {
    //   this.id = params['id'];
    // });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.student = this.studentsService.getStudentById(this.id);
    }

    this.activatedRoute.data.subscribe(data => {
      if (data['isEdit']) {
        this.openStudentFormModal();
      }
    });
  }
}
