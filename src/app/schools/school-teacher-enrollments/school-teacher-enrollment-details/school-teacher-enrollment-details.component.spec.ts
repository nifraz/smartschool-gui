import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTeacherEnrollmentDetailsComponent } from './school-teacher-enrollment-details.component';

describe('SchoolTeacherEnrollmentDetailsComponent', () => {
  let component: SchoolTeacherEnrollmentDetailsComponent;
  let fixture: ComponentFixture<SchoolTeacherEnrollmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolTeacherEnrollmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolTeacherEnrollmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
