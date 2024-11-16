import { Component, Input } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TypedDocumentNode } from 'apollo-angular';
import { DocumentNode } from 'graphql';

@Component({
  selector: 'app-graphql-form',
  standalone: true,
  imports: [],
  templateUrl: './graphql-form.component.html',
  styleUrl: './graphql-form.component.scss'
})
export class GraphqlFormComponent<T> extends FormComponent<T> {
  type: string = '';

  @Input() model!: T;
  @Input() fields: FormlyFieldConfig[] = [];
  
  enableMultipleCreate: boolean = false;

  recordFetchQuery!: DocumentNode | TypedDocumentNode<any, any>;
  recordCreateMutation!: DocumentNode | TypedDocumentNode<any, any>;
  recordUpdateMutation!: DocumentNode | TypedDocumentNode<any, any>;
}
