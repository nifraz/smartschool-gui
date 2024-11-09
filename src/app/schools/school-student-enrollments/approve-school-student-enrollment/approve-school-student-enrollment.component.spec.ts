import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSchoolStudentEnrollmentComponent } from './approve-school-student-enrollment.component';

describe('ApproveSchoolStudentEnrollmentComponent', () => {
  let component: ApproveSchoolStudentEnrollmentComponent;
  let fixture: ComponentFixture<ApproveSchoolStudentEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveSchoolStudentEnrollmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveSchoolStudentEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
