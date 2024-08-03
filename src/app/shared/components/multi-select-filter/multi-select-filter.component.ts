import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFilterAngularComp } from 'ag-grid-angular';
import { IFilterParams, IDoesFilterPassParams } from 'ag-grid-community';
import { MatCheckbox } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-select-filter',
  standalone: true,
  imports: [
    MatCheckbox,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './multi-select-filter.component.html',
  styleUrl: './multi-select-filter.component.scss'
})
export class MultiSelectFilterComponent implements IFilterAngularComp, OnInit {
  params!: CustomFilterParams;
  filterOptions: string[] = [];
  formGroup: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  agInit(params: CustomFilterParams): void {
    this.params = params;
    if (params.values) {
      this.filterOptions = params.values;
      this.filterOptions.forEach(option => {
        this.formGroup.addControl(option, this.fb.control(false));
      });
    }

    this.formGroup.valueChanges.subscribe(() => {
      this.params.filterChangedCallback();
    });
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    const selectedOptions = this.getSelectedOptions();
    return selectedOptions.length === 0 || selectedOptions.includes(params.data[this.params.colDef.field!]);
  }

  isFilterActive(): boolean {
    return this.getSelectedOptions().length > 0;
  }

  getModel(): any {
    if (!this.isFilterActive()) {
      return null;
    }
    return { value: this.getSelectedOptions() };
  }

  setModel(model: any): void {
    const values = model ? model.value : [];
    this.filterOptions.forEach(option => {
      this.formGroup.controls[option].setValue(values.includes(option));
    });
  }

  getSelectedOptions(): string[] {
    return this.filterOptions.filter(option => this.formGroup.controls[option].value);
  }

  ngOnInit() {}
}

export interface CustomFilterParams extends IFilterParams {
  values: string[];
}