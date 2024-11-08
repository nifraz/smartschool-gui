import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSchoolStudentEnrollmentRequestsComponent } from './user-school-student-enrollment-requests.component';

describe('UserSchoolStudentEnrollmentRequestsComponent', () => {
  let component: UserSchoolStudentEnrollmentRequestsComponent;
  let fixture: ComponentFixture<UserSchoolStudentEnrollmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSchoolStudentEnrollmentRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSchoolStudentEnrollmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
