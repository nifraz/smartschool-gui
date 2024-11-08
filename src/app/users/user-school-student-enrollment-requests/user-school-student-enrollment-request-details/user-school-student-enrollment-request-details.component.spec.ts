import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSchoolStudentEnrollmentRequestDetailsComponent } from './user-school-student-enrollment-request-details.component';

describe('UserSchoolStudentEnrollmentRequestDetailsComponent', () => {
  let component: UserSchoolStudentEnrollmentRequestDetailsComponent;
  let fixture: ComponentFixture<UserSchoolStudentEnrollmentRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSchoolStudentEnrollmentRequestDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSchoolStudentEnrollmentRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
