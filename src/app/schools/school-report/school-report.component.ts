import { Component, Inject, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ErrorAlertComponent } from "../../shared/components/error-alert/error-alert.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule, MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SchoolReportModel } from '../../../../graphql/generated';
import { GraphqlService } from '../../shared/services/graphql.service';
import { GET_SCHOOL_REPORT } from '../../shared/queries';
import { convertToISO } from '../../shared/functions';

@Component({
  selector: 'app-school-report',
  standalone: true,
  imports: [
    ErrorAlertComponent,
    MatProgressBarModule,
    CommonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormField,
    MatLabel,
    MatDateRangeInput,
    MatHint,
    MatDatepickerToggle,
    MatDateRangePicker,
    MatError,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRippleModule,
    MatInputModule
  ],
  templateUrl: './school-report.component.html',
  styleUrl: './school-report.component.scss'
})
export class SchoolReportComponent extends BaseComponent implements OnInit {
  id: number = 0;
  startTime: string | null = null;
  endTime: string | null = null;

  constructor(
    private graphqlService: GraphqlService,
    private dialogRef: MatDialogRef<SchoolReportComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super();
    this.id = data.id;
  }

  loadData(): void {
    if (this.id) {
      this.isLoading = true;
      const variables = {
        input: {
          id: +this.id,
          startTime: this.startTime,
          endTime: this.endTime,
        }
      }
      this.graphqlService.getGqlQueryObservable(GET_SCHOOL_REPORT, variables).subscribe({
        next: res => {
          this.isLoading = false;
          this.report = res.data['schoolReport'];
        },
        error: err => {
          this.isLoading = false;
          console.error(err);
        }
      });
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  onDateRangeChange(startDate: any, endDate: any) {
    this.startTime = convertToISO(startDate);
    this.endTime = convertToISO(endDate, true);
    this.loadData();
  }

  printReport(elementId: string) {
    const printContent = document.getElementById(elementId);
    if (!printContent) {
      return;
    }
    const windowPrint = window.open('', '', 'width=800,height=600');
    if (windowPrint) {
      windowPrint.document.write('<html><head><title>Print Report</title></head><body>');
      windowPrint.document.write(printContent!.innerHTML);
      windowPrint.document.write('</body></html>');
      windowPrint.document.close();
      windowPrint.print();
    }
  }

  closeModal(): void {
    // const oldValue = JSON.stringify(this.oldRecord);
    // const newRecord = this.getFormattedInput(this.model);
    // const newValue = JSON.stringify(newRecord);
    // if (oldValue != newValue) {
    //   if (!confirm("Are you sure you want to close without saving your changes?")) {
    //     return;
    //   }
    //   this.toastr.warning(`Changes were not saved`, this.typeName);
    // }
    this.dialogRef.close();
  }

  currentDate = new Date().toLocaleDateString();
  now = new Date();

  report?: SchoolReportModel;

  // Sample data for demonstration purposes
  school = {
    name: 'SmartSchool High',
    address: '123 Main St, Cityville',
    principal: 'John Doe',
    studentCount: 500,
    teacherCount: 50,
    staffCount: 20,
    attendanceRate: 96,
    performance: [
      { year: 2020, index: 'A+', averageScore: 88, grade: 'Excellent' },
      { year: 2021, index: 'A', averageScore: 85, grade: 'Good' },
      { year: 2022, index: 'A+', averageScore: 90, grade: 'Excellent' }
    ],
    financials: {
      totalFunds: 1500000,
      grants: 500000,
      expenditures: 1200000
    },
    events: [
      { name: 'Annual Sports Meet', date: '2023-06-10', description: 'Sports competition across all grades.' },
      { name: 'Science Fair', date: '2023-08-15', description: 'Showcasing student innovations.' }
    ],
    achievements: [
      'Ranked #1 in Cityville for Academic Excellence.',
      'Won the 2023 National Robotics Championship.',
      'Increased student enrollment by 15% in 2023.'
    ]
  };
}
