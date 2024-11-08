import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStudentEnrollmentsComponent } from './class-student-enrollments.component';

describe('ClassStudentEnrollmentsComponent', () => {
  let component: ClassStudentEnrollmentsComponent;
  let fixture: ComponentFixture<ClassStudentEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassStudentEnrollmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassStudentEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
