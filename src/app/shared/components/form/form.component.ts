import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DocumentNode } from 'graphql';
import { TypedDocumentNode } from 'apollo-angular';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export abstract class FormComponent<T> extends BaseComponent {
  id?: number;
  record?: T;
  isEditMode?: boolean;
  oldRecord?: T;
  isAddAnother?: boolean;

  @Input() form: FormGroup = new FormGroup({});
}
