import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTeacherEnrollmentsComponent } from './class-teacher-enrollments.component';

describe('ClassTeacherEnrollmentsComponent', () => {
  let component: ClassTeacherEnrollmentsComponent;
  let fixture: ComponentFixture<ClassTeacherEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTeacherEnrollmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassTeacherEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
