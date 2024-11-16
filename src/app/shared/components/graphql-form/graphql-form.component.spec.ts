import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlFormComponent } from './graphql-form.component';

describe('GraphqlFormComponent', () => {
  let component: GraphqlFormComponent;
  let fixture: ComponentFixture<GraphqlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphqlFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphqlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
