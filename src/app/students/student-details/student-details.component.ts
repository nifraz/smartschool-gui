import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../shared/not-found/not-found.component";
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../../shared/graphql-record-form/graphql-record-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GraphqlService } from '../../shared/services/graphql.service';
import { EnrollmentStatus, RequestStatus, StudentInput, StudentModel } from '../../../../graphql/generated';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../shared/components/base/base.component';
import { GET_STUDENT } from '../../shared/queries';
import { AuthService } from '../../auth/auth.service';
import { RecordComponent } from '../../shared/components/record/record.component';
import { GraphqlTypes, GraphqlCollections } from '../../shared/enums';

@Component({
    selector: 'app-student-details',
    standalone: true,
    templateUrl: './student-details.component.html',
    styleUrl: './student-details.component.scss',
    imports: [
        CommonModule,
        NotFoundComponent,
        MatProgressBarModule,
        RouterLink,
    ]
})
export class StudentDetailsComponent extends RecordComponent<StudentModel> implements OnInit {
  EnrollmentStatus = EnrollmentStatus;
  
  constructor(
    private studentsService: StudentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog,
    private graphqlService: GraphqlService,
    private toastr: ToastrService,
    public authService: AuthService,
  ) {
    // this.activatedRoute.params.subscribe(params => {
    //   this.id = params['id'];
    // });
    super();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('studentId');
    this.loadData();

    this.activatedRoute.data.subscribe(data => {
      if (data['isEdit']) {
        this.openRecordFormModal();
      }
    });
  }

  loadData(): void {
    if (this.id) {
      this.isLoading = true;
      const variables = {
        id: +this.id,
      }
      this.graphqlService.getGqlQueryObservable(GET_STUDENT, variables).subscribe({
        next: res => {
          this.isLoading = false;
          this.record = res.data[GraphqlTypes.STUDENT];
        },
        error: err => {
          this.isLoading = false;
          console.error(err);
        }
      });
    }
  }

  openRecordFormModal(): void {
    const inputDefs = {};
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
  
  editRecord() {
    this.router.navigate(['/students', this.id, 'edit']);
    // this.openRecordFormModal();
  }

  deleteRecord() {
    this.toastr.error(`Could not delete`, 'Students');
  }

  addSchoolStudentEnrollment() {

  }

}
