import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTeacherEnrollmentDetailsComponent } from './class-teacher-enrollment-details.component';

describe('ClassTeacherEnrollmentDetailsComponent', () => {
  let component: ClassTeacherEnrollmentDetailsComponent;
  let fixture: ComponentFixture<ClassTeacherEnrollmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTeacherEnrollmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassTeacherEnrollmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
