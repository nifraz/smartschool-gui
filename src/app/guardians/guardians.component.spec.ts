import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansComponent } from './guardians.component';

describe('GuardiansComponent', () => {
  let component: GuardiansComponent;
  let fixture: ComponentFixture<GuardiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardiansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
