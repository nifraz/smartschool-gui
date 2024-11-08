import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTeacherEnrollmentsComponent } from './school-teacher-enrollments.component';

describe('SchoolTeacherEnrollmentsComponent', () => {
  let component: SchoolTeacherEnrollmentsComponent;
  let fixture: ComponentFixture<SchoolTeacherEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolTeacherEnrollmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolTeacherEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
