import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlDataGridComponent } from './graphql-data-grid.component';

describe('GraphqlDataGridComponent', () => {
  let component: GraphqlDataGridComponent;
  let fixture: ComponentFixture<GraphqlDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphqlDataGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphqlDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
