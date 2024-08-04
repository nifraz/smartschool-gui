import { Component, OnInit } from '@angular/core';
import { StudentsService, GET_STUDENT } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../shared/not-found/not-found.component";
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../../shared/graphql-record-form/graphql-record-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GraphqlCollections, GraphqlService, GraphqlTypes } from '../../shared/services/graphql.service';
import { StudentInput, StudentType } from '../../../../graphql/generated';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-student-details',
    standalone: true,
    templateUrl: './student-details.component.html',
    styleUrl: './student-details.component.scss',
    imports: [
        CommonModule,
        NotFoundComponent,
        MatProgressBarModule
    ]
})
export class StudentDetailsComponent implements OnInit {
  loading: boolean = false;

  openStudentFormModal(): void {
    const inputDefs = this.studentsService.getStudentInputDefs();
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.STUDENTS,
        type: GraphqlTypes.STUDENT,
        inputDefs,
        id: this.id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/students', this.id]);
      //reload data
      console.log(result);
    });
  }

  deleteStudent() {
    this.toastr.error(`Could not delete`, 'Students');
  }

  editStudent() {
    this.router.navigate(['/students', this.id, 'edit']);
    // this.openStudentFormModal();
  }

  id?: string | null;
  record?: StudentType;

  constructor(
    private studentsService: StudentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog,
    private graphqlService: GraphqlService,
    private toastr: ToastrService,
  ) {
    // this.activatedRoute.params.subscribe(params => {
    //   this.id = params['id'];
    // });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.loading = true;
      const variables = {
        id: +this.id,
      }
      this.graphqlService.getGqlQueryObservable(GET_STUDENT, variables).subscribe({
        next: res => {
          this.loading = false;
          this.record = res.data[GraphqlTypes.STUDENT];
        },
        error: err => {
          this.loading = false;
          console.error(err);
        }
      })
    }

    this.activatedRoute.data.subscribe(data => {
      if (data['isEdit']) {
        this.openStudentFormModal();
      }
    });
  }
}
