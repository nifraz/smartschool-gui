import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSchoolTeacherEnrollmentRequestsComponent } from './user-school-teacher-enrollment-requests.component';

describe('UserSchoolTeacherEnrollmentRequestsComponent', () => {
  let component: UserSchoolTeacherEnrollmentRequestsComponent;
  let fixture: ComponentFixture<UserSchoolTeacherEnrollmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSchoolTeacherEnrollmentRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSchoolTeacherEnrollmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
