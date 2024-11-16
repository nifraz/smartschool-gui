import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrService } from 'ngx-toastr';
import { StudentModel, EnrollmentStatus, SchoolStudentEnrollmentModel } from '../../../../../graphql/generated';
import { AuthService } from '../../../auth/auth.service';
import { RecordComponent } from '../../../shared/components/record/record.component';
import { GraphqlRecordFormComponent } from '../../../shared/graphql-record-form/graphql-record-form.component';
import { NotFoundComponent } from '../../../shared/not-found/not-found.component';
import { GET_SCHOOL_STUDENT_ENROLLMENT, GET_STUDENT } from '../../../shared/queries';
import { GraphqlService } from '../../../shared/services/graphql.service';
import { StudentsService } from '../../../students/students.service';
import { TitleCaseWithSpacePipe } from "../../../shared/pipes/title-case-with-space.pipe";
import { GraphqlTypes, GraphqlCollections } from '../../../shared/enums';

@Component({
  selector: 'app-school-student-enrollment-details',
  standalone: true,
  imports: [
    CommonModule,
    NotFoundComponent,
    MatProgressBarModule,
    RouterLink,
    TitleCaseWithSpacePipe
],
  templateUrl: './school-student-enrollment-details.component.html',
  styleUrl: './school-student-enrollment-details.component.scss'
})
export class SchoolStudentEnrollmentDetailsComponent extends RecordComponent<SchoolStudentEnrollmentModel> implements OnInit {
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
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.isLoading = true;
      const variables = {
        id: +this.id,
      }
      this.graphqlService.getGqlQueryObservable(GET_SCHOOL_STUDENT_ENROLLMENT, variables).subscribe({
        next: res => {
          this.isLoading = false;
          this.record = res.data[GraphqlTypes.SCHOOL_STUDENT_ENROLLMENT];
        },
        error: err => {
          this.isLoading = false;
          console.error(err);
        }
      })
    }

    this.activatedRoute.data.subscribe(data => {
      if (data['isEdit']) {
        this.openRecordFormModal();
      }
    });
  }

  override loadRecord(): void {
    throw new Error('Method not implemented.');
  }

  openRecordFormModal(): void {
    const inputDefs = {};
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.SCHOOL_STUDENT_ENROLLMENTS,
        type: GraphqlTypes.SCHOOL_STUDENT_ENROLLMENT,
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
    this.toastr.error(`Could not delete`, 'Record');
  }

  addEnrollment() {

  }

}
