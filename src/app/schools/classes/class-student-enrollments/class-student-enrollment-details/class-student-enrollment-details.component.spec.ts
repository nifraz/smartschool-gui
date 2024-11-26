import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStudentEnrollmentDetailsComponent } from './class-student-enrollment-details.component';

describe('ClassStudentEnrollmentDetailsComponent', () => {
  let component: ClassStudentEnrollmentDetailsComponent;
  let fixture: ComponentFixture<ClassStudentEnrollmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassStudentEnrollmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassStudentEnrollmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
