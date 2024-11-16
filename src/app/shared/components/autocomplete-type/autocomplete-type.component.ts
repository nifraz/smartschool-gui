import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/material';
import { catchError, debounceTime, distinctUntilChanged, filter, map, Observable, of, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatAutocomplete, MatAutocompleteModule, MatAutocompleteSelectedEvent, MatOption } from '@angular/material/autocomplete';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormlyOption } from '../../models';

@Component({
  selector: 'app-autocomplete-type',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    FormlyModule
  ],
  templateUrl: './autocomplete-type.component.html',
  styleUrl: './autocomplete-type.component.scss'
})
export class AutocompleteTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {
  protected unsubscribe$ = new Subject<void>();
  filter!: Observable<any>;
  private selectedOption: FormlyOption | null = null; // Track the selected option

  ngOnInit() {
    this.filter = this.formControl.valueChanges.pipe(
      takeUntil(this.unsubscribe$),
      // Trigger filtration only if the user manually types
      filter((input) => typeof input === 'string' && !!input),
      distinctUntilChanged(),
      debounceTime(300),
      switchMap((input) => this.props['filter'](input)),
      catchError(() => of([]))
    );

    // Sync selected value to model when an option is selected
    this.formControl.valueChanges.pipe(
      takeUntil(this.unsubscribe$),
      filter((value) => typeof value !== 'string'), // Only when a valid option is selected
      map((selectedOption) => {
        this.selectedOption = selectedOption;
        return selectedOption ? selectedOption.value : null;
      })
    ).subscribe((selectedValue) => {
      // Set model value without triggering additional events
      this.formControl.setValue(this.selectedOption, { emitEvent: false });
      this.formControl.markAsDirty();
    });
  }

  override ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    super.ngOnDestroy();
  }

  displayFn(option: FormlyOption): string {
    return option ? option.label : '';
  }
}