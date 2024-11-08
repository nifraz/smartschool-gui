import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  @Input() languageCode: string = 'en';
  @Input() themeClass: string = "ag-theme-quartz";

  isLoading: boolean = false;
  isError: boolean = false;
  isSaving: boolean = false;

  constructor() { }

}
