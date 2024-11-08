import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStudentEnrollmentRequestsComponent } from './school-student-enrollment-requests.component';

describe('SchoolStudentEnrollmentRequestsComponent', () => {
  let component: SchoolStudentEnrollmentRequestsComponent;
  let fixture: ComponentFixture<SchoolStudentEnrollmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolStudentEnrollmentRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolStudentEnrollmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
