import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStudentEnrollmentsComponent } from './school-student-enrollments.component';

describe('SchoolStudentEnrollmentsComponent', () => {
  let component: SchoolStudentEnrollmentsComponent;
  let fixture: ComponentFixture<SchoolStudentEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolStudentEnrollmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolStudentEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
