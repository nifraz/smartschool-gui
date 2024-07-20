import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlRecordFormComponent } from './graphql-record-form.component';

describe('GraphqlRecordFormComponent', () => {
  let component: GraphqlRecordFormComponent;
  let fixture: ComponentFixture<GraphqlRecordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphqlRecordFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphqlRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
