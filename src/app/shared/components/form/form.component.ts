import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export abstract class FormComponent<T> extends BaseComponent {
  id?: number | null;
  record?: T | null;
  isEditMode?: boolean;
}
