import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrService } from 'ngx-toastr';
import { ClassModel, EnrollmentStatus, Grade } from '../../../../../graphql/generated';
import { RecordComponent } from '../../../shared/components/record/record.component';
import { NotFoundComponent } from '../../../shared/not-found/not-found.component';
import { AddSpacesPipe } from '../../../shared/pipes/add-spaces.pipe';
import { TitleCaseWithSpacePipe } from '../../../shared/pipes/title-case-with-space.pipe';
import { AuthService } from '../../../auth/auth.service';
import { groupByToArrays } from '../../../shared/functions';
import { GraphqlRecordFormComponent } from '../../../shared/graphql-record-form/graphql-record-form.component';
import { GET_CLASS } from '../../../shared/queries';
import { GraphqlService } from '../../../shared/services/graphql.service';
import { GraphqlTypes, GraphqlCollections } from '../../../shared/enums';

@Component({
  selector: 'app-class-details',
  standalone: true,
  imports: [
    CommonModule,
    NotFoundComponent,
    MatProgressBarModule,
    RouterLink,
    AddSpacesPipe,
    TitleCaseWithSpacePipe
  ],
  templateUrl: './class-details.component.html',
  styleUrl: './class-details.component.scss'
})
export class ClassDetailsComponent extends RecordComponent<ClassModel> implements OnInit {
  EnrollmentStatus = EnrollmentStatus;
  groupByToArrays = groupByToArrays;

  schoolId?: string | null;

  constructor(
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
    this.id = this.activatedRoute.snapshot.paramMap.get('classId');
    this.schoolId = this.activatedRoute.snapshot.paramMap.get('schoolId');

    if (this.id && this.schoolId) {
      this.isLoading = true;
      const variables = {
        id: +this.id,
      }
      this.graphqlService.getGqlQueryObservable(GET_CLASS, variables).subscribe({
        next: res => {
          this.isLoading = false;
          this.record = res.data[GraphqlTypes.CLASS];
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

  override loadData(): void {
    throw new Error('Method not implemented.');
  }

  openRecordFormModal(): void {
    const inputDefs = {};
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.CLASSES,
        type: GraphqlTypes.CLASS,
        inputDefs,
        id: this.id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/schools', this.record?.grade, this.record?.section ]);
      //reload data
      console.log(result);
    });
  }
  
  editRecord() {
    this.router.navigate(['/schools', this.record?.grade, this.record?.section, 'edit']);
    // this.openRecordFormModal();
  }

  deleteRecord() {
    this.toastr.error(`Could not delete`, 'Record');
  }

  addClass() {

  }

}
