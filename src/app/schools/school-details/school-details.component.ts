import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../shared/not-found/not-found.component";
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../../shared/graphql-record-form/graphql-record-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Age, calculateAge, GraphqlCollections, GraphqlService, GraphqlTypes } from '../../shared/services/graphql.service';
import { EnrollmentStatus, RequestStatus, SchoolModel, StudentInput, StudentModel } from '../../../../graphql/generated';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../shared/components/base/base.component';
import { GET_SCHOOL, GET_STUDENT } from '../../shared/queries';
import { AuthService } from '../../auth/auth.service';
import { RecordComponent } from '../../shared/components/record/record.component';
import { SchoolsService } from '../schools.service';
import { AddSpacesPipe } from "../../shared/pipes/add-spaces.pipe";
import { TitleCaseWithSpacePipe } from "../../shared/pipes/title-case-with-space.pipe";
import { groupBy, groupByToArrays } from '../../shared/functions';
import { CreateSchoolStudentEnrollmentRequestComponent } from '../school-student-enrollment-requests/create-school-student-enrollment-request/create-school-student-enrollment-request.component';

@Component({
  selector: 'app-school-details',
  standalone: true,
  imports: [
    CommonModule,
    NotFoundComponent,
    MatProgressBarModule,
    RouterLink,
    AddSpacesPipe,
    TitleCaseWithSpacePipe
],
  templateUrl: './school-details.component.html',
  styleUrl: './school-details.component.scss'
})
export class SchoolDetailsComponent extends RecordComponent<SchoolModel> implements OnInit {
  EnrollmentStatus = EnrollmentStatus;
  RequestStatus = RequestStatus;
  groupByToArrays = groupByToArrays;

  constructor(
    private schoolsService: SchoolsService,
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
  }

  loadRecord(): void {
    if (this.id) {
      this.isLoading = true;
      const variables = {
        id: +this.id,
      }
      this.graphqlService.getGqlQueryObservable(GET_SCHOOL, variables).subscribe({
        next: res => {
          this.isLoading = false;
          this.record = res.data[GraphqlTypes.SCHOOL];
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
        collection: GraphqlCollections.SCHOOLS,
        type: GraphqlTypes.SCHOOL,
        inputDefs,
        id: this.id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/schools', this.id]);
      //reload data
      console.log(result);
    });
  }
  
  editRecord() {
    this.router.navigate(['/schools', this.id, 'edit']);
    // this.openRecordFormModal();
  }

  deleteRecord() {
    this.toastr.error(`Could not delete`, 'Record');
  }

  createClass() {

  }

  createSchoolStudentEnrollmentRequest() {
    const userAge = this.authService.loggedInUser?.person.age?.years;
    if (userAge && userAge >= 21) {
      this.toastr.warning(`Sorry You cannot request for School Student Enrollment after 21 years. Your current age is ${userAge}.`);
      return;
    }
    
    const dialogRef = this.matDialog.open(CreateSchoolStudentEnrollmentRequestComponent, {
      width: '1200px',
      data: {
        school: this.record,
        person: this.authService.loggedInUser?.person,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.router.navigate(['/teachers', this.id]);
      this.loadRecord();
      //reload data
      console.log(result);
    });
  }

}
