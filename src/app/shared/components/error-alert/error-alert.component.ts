import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TypeofPipe } from '../../pipes/typeof.pipe';

@Component({
  selector: 'app-error-alert',
  standalone: true,
  imports: [
    CommonModule,
    TypeofPipe
  ],
  templateUrl: './error-alert.component.html',
  styleUrl: './error-alert.component.scss'
})
export class ErrorAlertComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.error);
  }
  @Input() error: any | null;

}
