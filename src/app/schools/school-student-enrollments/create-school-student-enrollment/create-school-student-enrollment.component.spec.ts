import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchoolStudentEnrollmentComponent } from './create-school-student-enrollment.component';

describe('CreateSchoolStudentEnrollmentComponent', () => {
  let component: CreateSchoolStudentEnrollmentComponent;
  let fixture: ComponentFixture<CreateSchoolStudentEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSchoolStudentEnrollmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSchoolStudentEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
