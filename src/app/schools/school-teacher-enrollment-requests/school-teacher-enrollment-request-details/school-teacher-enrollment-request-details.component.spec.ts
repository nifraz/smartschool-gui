import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTeacherEnrollmentRequestDetailsComponent } from './school-teacher-enrollment-request-details.component';

describe('SchoolTeacherEnrollmentRequestDetailsComponent', () => {
  let component: SchoolTeacherEnrollmentRequestDetailsComponent;
  let fixture: ComponentFixture<SchoolTeacherEnrollmentRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolTeacherEnrollmentRequestDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolTeacherEnrollmentRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
