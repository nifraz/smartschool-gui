import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSchoolTeacherEnrollmentRequestDetailsComponent } from './user-school-teacher-enrollment-request-details.component';

describe('UserSchoolTeacherEnrollmentRequestDetailsComponent', () => {
  let component: UserSchoolTeacherEnrollmentRequestDetailsComponent;
  let fixture: ComponentFixture<UserSchoolTeacherEnrollmentRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSchoolTeacherEnrollmentRequestDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSchoolTeacherEnrollmentRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
