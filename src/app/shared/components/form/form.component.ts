import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DocumentNode } from 'graphql';
import { TypedDocumentNode } from 'apollo-angular';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export abstract class FormComponent<I> extends DataComponent {
  id?: number;
  record?: I;
  isEditMode?: boolean;
  oldRecord?: I;
  isAddAnother?: boolean;

  @Input() form: FormGroup = new FormGroup({});
  @Input() model!: I;
  @Input() fields: FormlyFieldConfig[] = [];
}
