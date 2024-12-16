import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DataComponent } from '../data/data.component';
import { TypedDocumentNode } from 'apollo-angular';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export abstract class GridComponent<T> extends DataComponent {
  subscriptions: TypedDocumentNode<any, any>[] = [];
  
  abstract onRecordClicked(record: T): void;
  abstract onAddNewClicked(): void;
  // abstract openRecordModal(): void;

  constructor(
  ) {
    super();
    
  }
}
