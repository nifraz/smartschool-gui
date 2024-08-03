import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFloatingFilterComponent } from './custom-floating-filter.component';

describe('CustomFloatingFilterComponent', () => {
  let component: CustomFloatingFilterComponent;
  let fixture: ComponentFixture<CustomFloatingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFloatingFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomFloatingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
