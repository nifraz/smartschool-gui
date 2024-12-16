import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalsComponent } from './principals.component';

describe('PrincipalsComponent', () => {
  let component: PrincipalsComponent;
  let fixture: ComponentFixture<PrincipalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
