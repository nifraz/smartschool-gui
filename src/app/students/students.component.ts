import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    GraphqlDataGridComponent
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  ngOnInit(): void {
    console.log('students');
  }
  
  themeClass = "ag-theme-quartz";

  // Row Data: The data to be displayed.
  rowData: Student[] = [
    {
      id: "1",
      studentId: 1001,
      fullName: "Anjali Kumari",
      nickName: "Anju",
      dateOfBirth: new Date("2005-05-21"),
      mobileNo: "0771234567"
    },
    {
      id: "2",
      studentId: 1002,
      fullName: "Bhaskar Patel",
      nickName: "Bhaski",
      dateOfBirth: new Date("2006-04-12"),
      mobileNo: "0772345678"
    },
    {
      id: "3",
      studentId: 1003,
      fullName: "Chandani Sinha",
      nickName: "Chandu",
      dateOfBirth: new Date("2005-03-15"),
      mobileNo: "0773456789"
    },
    {
      id: "4",
      studentId: 1004,
      fullName: "Deepak Kumar",
      nickName: "Deepu",
      dateOfBirth: new Date("2007-07-10"),
      mobileNo: "0774567890"
    },
    {
      id: "5",
      studentId: 1005,
      fullName: "Esha Rani",
      nickName: "Eshu",
      dateOfBirth: new Date("2005-08-19"),
      mobileNo: "0775678901"
    },
    {
      id: "6",
      studentId: 1006,
      fullName: "Farhan Ahmed",
      nickName: "Faru",
      dateOfBirth: new Date("2006-09-23"),
      mobileNo: "0776789012"
    },
    {
      id: "7",
      studentId: 1007,
      fullName: "Geetika Sharma",
      nickName: "Geetu",
      dateOfBirth: new Date("2007-10-14"),
      mobileNo: "0777890123"
    },
    {
      id: "8",
      studentId: 1008,
      fullName: "Harish Rao",
      nickName: "Harry",
      dateOfBirth: new Date("2006-11-25"),
      mobileNo: "0778901234"
    },
    {
      id: "9",
      studentId: 1009,
      fullName: "Ishita Gupta",
      nickName: "Ishu",
      dateOfBirth: new Date("2005-12-30"),
      mobileNo: "0779012345"
    },
    {
      id: "10",
      studentId: 1010,
      fullName: "Jayant Kumar",
      nickName: "Jay",
      dateOfBirth: new Date("2006-01-17"),
      mobileNo: "0770123456"
    },
    {
      id: "11",
      studentId: 1011,
      fullName: "Kajal Sinha",
      nickName: "Kaju",
      dateOfBirth: new Date("2007-02-11"),
      mobileNo: "0771234567"
    },
    {
      id: "12",
      studentId: 1012,
      fullName: "Lakshmi Menon",
      nickName: "Lucky",
      dateOfBirth: new Date("2005-03-08"),
      mobileNo: "0772345678"
    },
    {
      id: "13",
      studentId: 1013,
      fullName: "Manoj Kumar",
      nickName: "Manu",
      dateOfBirth: new Date("2006-04-22"),
      mobileNo: "0773456789"
    },
    {
      id: "14",
      studentId: 1014,
      fullName: "Nisha Rani",
      nickName: "Nishu",
      dateOfBirth: new Date("2007-05-16"),
      mobileNo: "0774567890"
    },
    {
      id: "15",
      studentId: 1015,
      fullName: "Omkar Sharma",
      nickName: "Omi",
      dateOfBirth: new Date("2005-06-10"),
      mobileNo: "0775678901"
    },
    {
      id: "16",
      studentId: 1016,
      fullName: "Pooja Verma",
      nickName: "Pooji",
      dateOfBirth: new Date("2006-07-04"),
      mobileNo: "0776789012"
    },
    {
      id: "17",
      studentId: 1017,
      fullName: "Qasim Ali",
      nickName: "Qas",
      dateOfBirth: new Date("2007-08-20"),
      mobileNo: "0777890123"
    },
    {
      id: "18",
      studentId: 1018,
      fullName: "Ravi Kumar",
      nickName: "Ravi",
      dateOfBirth: new Date("2005-09-15"),
      mobileNo: "0778901234"
    },
    {
      id: "19",
      studentId: 1019,
      fullName: "Sneha Das",
      nickName: "Snehi",
      dateOfBirth: new Date("2006-10-09"),
      mobileNo: "0779012345"
    },
    {
      id: "20",
      studentId: 1020,
      fullName: "Tushar Mehta",
      nickName: "Tushu",
      dateOfBirth: new Date("2007-11-30"),
      mobileNo: "0770123456"
    },
    {
      id: "21",
      studentId: 1021,
      fullName: "Usha Nair",
      nickName: "Ushi",
      dateOfBirth: new Date("2005-12-25"),
      mobileNo: "0771234567"
    },
    {
      id: "22",
      studentId: 1022,
      fullName: "Vijay Singh",
      nickName: "Viju",
      dateOfBirth: new Date("2006-01-18"),
      mobileNo: "0772345678"
    },
    {
      id: "23",
      studentId: 1023,
      fullName: "Waseem Akram",
      nickName: "Wasi",
      dateOfBirth: new Date("2007-02-14"),
      mobileNo: "0773456789"
    },
    {
      id: "24",
      studentId: 1024,
      fullName: "Xena Sharma",
      nickName: "Xeni",
      dateOfBirth: new Date("2005-03-11"),
      mobileNo: "0774567890"
    },
    {
      id: "25",
      studentId: 1025,
      fullName: "Yash Kumar",
      nickName: "Yashi",
      dateOfBirth: new Date("2006-04-02"),
      mobileNo: "0775678901"
    }
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<Student>[] = [
    { 
      field: "id",
      hide: true,
     },
    { 
      field: "studentId",
      pinned: true,
    },
    { field: "fullName" },
    { field: "nickName" },
    { field: "dateOfBirth" },
    { field: "mobileNo" },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  }
}

export interface Student {
  id: string,
  studentId: number,
  fullName: string,
  nickName: string,
  dateOfBirth: Date,
  mobileNo: string,
}
