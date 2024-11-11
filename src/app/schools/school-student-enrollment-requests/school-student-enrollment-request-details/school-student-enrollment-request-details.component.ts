import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrService } from 'ngx-toastr';
import { NotFoundComponent } from '../../../shared/not-found/not-found.component';
import { StudentModel, EnrollmentStatus, SchoolStudentEnrollmentRequestModel, RequestStatus, SchoolStudentEnrollmentModel } from '../../../../../graphql/generated';
import { AuthService } from '../../../auth/auth.service';
import { RecordComponent } from '../../../shared/components/record/record.component';
import { GraphqlRecordFormComponent } from '../../../shared/graphql-record-form/graphql-record-form.component';
import { GET_SCHOOL_STUDENT_ENROLLMENT_REQUEST, GET_STUDENT } from '../../../shared/queries';
import { GraphqlService, GraphqlTypes, GraphqlCollections, GraphqlSubscriptionResponse, GraphqlSubscriptionResponseData } from '../../../shared/services/graphql.service';
import { StudentsService } from '../../../students/students.service';
import { TitleCaseWithSpacePipe } from "../../../shared/pipes/title-case-with-space.pipe";
import { LaddaModule } from 'angular2-ladda';
import { UPDATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST_STATUS } from '../../../shared/mutations';
import { CreateSchoolStudentEnrollmentComponent } from '../../school-student-enrollments/create-school-student-enrollment/create-school-student-enrollment.component';
import { ApproveSchoolStudentEnrollmentComponent } from '../../school-student-enrollments/approve-school-student-enrollment/approve-school-student-enrollment.component';
import { SCHOOL_STUDENT_ENROLLMENT_CREATED } from '../../../shared/subscriptions';
import { MutationResult } from 'apollo-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-school-student-enrollment-request-details',
  standalone: true,
  imports: [
    CommonModule,
    NotFoundComponent,
    MatProgressBarModule,
    RouterLink,
    TitleCaseWithSpacePipe,
    LaddaModule,
    SweetAlert2Module,
],
  templateUrl: './school-student-enrollment-request-details.component.html',
  styleUrl: './school-student-enrollment-request-details.component.scss'
})
export class SchoolStudentEnrollmentRequestDetailsComponent extends RecordComponent<SchoolStudentEnrollmentRequestModel> implements OnInit {
  EnrollmentStatus = EnrollmentStatus;
  RequestStatus = RequestStatus;

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
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadRecord();

    this.activatedRoute.data.subscribe(data => {
      if (data['isEdit']) {
        this.openRecordFormModal();
      }
    });

    this.graphqlService.getGqlSubscriptionObservable(SCHOOL_STUDENT_ENROLLMENT_CREATED).subscribe(
      (res: MutationResult<any>) => {
        if (res.data['schoolStudentEnrollmentCreated']?.schoolStudentEnrollmentRequestId == this.record?.id) {
          this.toastr.success(`This request has been approved by the school.`, this.title)
          this.loadRecord();
        }
      }
    );
    
  }

  override loadRecord(): void {
    if (this.id) {
      this.isLoading = true;
      const variables = {
        id: +this.id,
      }
      this.graphqlService.getGqlQueryObservable(GET_SCHOOL_STUDENT_ENROLLMENT_REQUEST, variables).subscribe({
        next: res => {
          this.isLoading = false;
          this.record = res.data[GraphqlTypes.SCHOOL_STUDENT_ENROLLMENT_REQUEST];
        },
        error: err => {
          this.isLoading = false;
          console.error(err);
        }
      });
    }
  }

  openRecordFormModal(): void {
    const inputDefs = this.studentsService.getStudentInputDefs();
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.SCHOOL_STUDENT_ENROLLMENT_REQUESTS,
        type: GraphqlTypes.SCHOOL_STUDENT_ENROLLMENT_REQUEST,
        inputDefs,
        id: this.id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/school-student-enrollment-requests', this.id]);
      //reload data
      console.log(result);
    });
  }
  
  editRecord() {
    this.router.navigate(['/school-student-enrollment-requests', this.id, 'edit']);
    // this.openRecordFormModal();
  }

  deleteRecord() {
    this.toastr.error(`Could not delete`, 'Record');
  }

  updateSchoolStudentEnrollmentRequestStatus(status: RequestStatus) {
    if (status == RequestStatus.Approved) {
      const dialogRef = this.matDialog.open(ApproveSchoolStudentEnrollmentComponent, {
        width: '1200px',
        data: {
          schoolStudentEnrollmentRequest: this.record,
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // this.router.navigate(['/teachers', this.id]);
        this.loadRecord();
        //reload data
        console.log(result);
      });
    }
    else {
      this.isLoading = true;
      this.error = null;



      const mutation = UPDATE_SCHOOL_STUDENT_ENROLLMENT_REQUEST_STATUS;
      const variables = {
        id: this.id ? +this.id : 0,
        input: {
          status,
          reason: null,
        },
      };
      const refetchQueries: string[] = [];

      this.graphqlService.getGqlMutationObservable(mutation, variables, refetchQueries).subscribe({
        next: ({ data, errors, loading }) => {
          this.isLoading = false;
          if (errors) {
            this.error = errors;
            this.toastr.error(`Could not update record`, this.title);
          }
          if (data) {
            this.toastr.success(`Record updated`, this.title);
            // if (this.addAnother) {
            //   this.formGroup.reset();
            //   return;
            // }
            // this.oldRecord = input;
            this.loadRecord();
          }
        },
        error: err => {
          this.isLoading = false;
          this.toastr.error(`Error occured`, this.title);
          console.log(err);
        }
      });
    }
  }

}
