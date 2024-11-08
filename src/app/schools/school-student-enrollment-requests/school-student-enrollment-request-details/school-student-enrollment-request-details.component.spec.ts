import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStudentEnrollmentRequestDetailsComponent } from './school-student-enrollment-request-details.component';

describe('SchoolStudentEnrollmentRequestDetailsComponent', () => {
  let component: SchoolStudentEnrollmentRequestDetailsComponent;
  let fixture: ComponentFixture<SchoolStudentEnrollmentRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolStudentEnrollmentRequestDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolStudentEnrollmentRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
