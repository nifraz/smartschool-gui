import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalDetailsComponent } from './principal-details.component';

describe('PrincipalDetailsComponent', () => {
  let component: PrincipalDetailsComponent;
  let fixture: ComponentFixture<PrincipalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
