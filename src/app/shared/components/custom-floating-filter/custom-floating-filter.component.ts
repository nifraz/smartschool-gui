import { Component } from '@angular/core';
import { IFloatingFilterAngularComp } from 'ag-grid-angular';
import { IFloatingFilterParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-floating-filter',
  standalone: true,
  imports: [],
  templateUrl: './custom-floating-filter.component.html',
  styleUrl: './custom-floating-filter.component.scss'
})
export class CustomFloatingFilterComponent implements IFloatingFilterAngularComp {
  params!: IFloatingFilterParams;
  displayValue: string = '';

  agInit(params: IFloatingFilterParams): void {
    this.params = params;
  }

  onParentModelChanged(parentModel: any): void {
    if (!parentModel) {
      this.displayValue = '';
    } else {
      this.displayValue = parentModel.value.join(', ');
    }
    const element = document.querySelector('#eFloatingFilterBody')?.parentElement;
    if (element) {
      element.style.width = '100%';
    }
  }
}
