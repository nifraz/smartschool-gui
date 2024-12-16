import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export abstract class BaseComponent implements OnDestroy {
  title?: string;

  @Input() languageCode: string = 'en';

  isLoading: boolean = false;
  isError: boolean = false;
  isSaving: boolean = false;

  error: any | null;

  protected unsubscribe$ = new Subject<void>();

  constructor() { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
