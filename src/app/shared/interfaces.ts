import { Observable } from 'rxjs';

export interface AutocompleteTemplateOptions {
  label?: string; // Label for the dropdown
  placeholder?: string; // Placeholder text
  required?: boolean; // Whether the field is required
  fetch?: (search: string) => Observable<any[]>; // Function to fetch filtered options
  valueKey?: string; // Key for the option value
  labelKey?: string; // Key for the option label
}
