import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  currentDate = new Date().toLocaleDateString();

  // Sample data for demonstration purposes
  school = {
    name: 'SmartSchool High',
    address: '123 Main St, Cityville',
    principal: 'John Doe',
    studentCount: 500,
    teacherCount: 50,
    performanceIndex: 'A+'
  };

  student = {
    fullName: 'Jane Smith',
    age: 15,
    class: '10th Grade',
    rollNumber: '12345',
    performance: [
      { name: 'Mathematics', marks: 90, totalMarks: 100 },
      { name: 'Science', marks: 85, totalMarks: 100 },
      { name: 'History', marks: 88, totalMarks: 100 },
      { name: 'English', marks: 92, totalMarks: 100 }
    ]
  };

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
}
