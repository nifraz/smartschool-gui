import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export abstract class GridComponent<T> extends DataComponent {
  abstract onRecordClicked(record: T): void;
  abstract onNewClicked(): void;
  // abstract openRecordModal(): void;

  constructor(
  ) {
    super();
    
  }
}
