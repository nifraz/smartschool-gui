import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IFilterAngularComp } from 'ag-grid-angular';
import { IFilterParams, IDoesFilterPassParams } from 'ag-grid-community';
import { MatFormField } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-select-filter',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './multi-select-filter.component.html',
  styleUrl: './multi-select-filter.component.scss'
})
export class MultiSelectFilterComponent implements IFilterAngularComp, OnInit {
  params!: CustomFilterParams;
  filterOptions: string[] = [];
  filterControl = new FormControl<any>([]);

  agInit(params: CustomFilterParams): void {
    this.params = params;
    if (params.values) {
      this.filterOptions = params.values;
    }

    this.filterControl.valueChanges.subscribe(() => {
      this.params.filterChangedCallback();
    });
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    const values = this.filterControl.value;
    return values?.length === 0 || values?.includes(params.data[this.params.colDef.field!]);
  }

  isFilterActive(): boolean {
    return this.filterControl.value.length > 0;
  }

  getModel(): any {
    if (!this.isFilterActive()) {
      return null;
    }
    return { value: this.filterControl.value };
  }

  setModel(model: any): void {
    this.filterControl.setValue(model ? model.value : []);
  }

  ngOnInit() {}
}


export interface CustomFilterParams extends IFilterParams {
  values: string[];
}