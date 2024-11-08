import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTeacherEnrollmentRequestsComponent } from './school-teacher-enrollment-requests.component';

describe('SchoolTeacherEnrollmentRequestsComponent', () => {
  let component: SchoolTeacherEnrollmentRequestsComponent;
  let fixture: ComponentFixture<SchoolTeacherEnrollmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolTeacherEnrollmentRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolTeacherEnrollmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
