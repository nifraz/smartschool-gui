import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchoolStudentEnrollmentRequestComponent } from './create-school-student-enrollment-request.component';

describe('CreateSchoolStudentEnrollmentRequestComponent', () => {
  let component: CreateSchoolStudentEnrollmentRequestComponent;
  let fixture: ComponentFixture<CreateSchoolStudentEnrollmentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSchoolStudentEnrollmentRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSchoolStudentEnrollmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
