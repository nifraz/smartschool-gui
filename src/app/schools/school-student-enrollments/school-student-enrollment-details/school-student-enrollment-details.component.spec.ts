import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStudentEnrollmentDetailsComponent } from './school-student-enrollment-details.component';

describe('SchoolStudentEnrollmentDetailsComponent', () => {
  let component: SchoolStudentEnrollmentDetailsComponent;
  let fixture: ComponentFixture<SchoolStudentEnrollmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolStudentEnrollmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolStudentEnrollmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
