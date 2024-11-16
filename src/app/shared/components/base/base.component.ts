import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export abstract class BaseComponent {
  title: string = '';

  @Input() languageCode: string = 'en';
  @Input() themeClass: string = "ag-theme-quartz";

  isLoading: boolean = false;
  isError: boolean = false;
  isSaving: boolean = false;

  error: any | null;

  protected unsubscribe$ = new Subject<void>();

  constructor() { }

}
