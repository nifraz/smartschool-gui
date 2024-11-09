import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [],
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss'
})
export abstract class RecordComponent<T> extends BaseComponent {
  id?: string | null;
  record?: T | null;
  isEditMode?: boolean;

  abstract loadRecord(): void;
  abstract openRecordFormModal(): void;
  abstract editRecord(): void;
  abstract deleteRecord(): void;
}
