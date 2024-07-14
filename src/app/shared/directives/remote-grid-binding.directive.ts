import { Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import { GridReadyEvent, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { catchError, tap } from 'rxjs/operators';
import { RemoteGridApi } from '../services/graphql.service';
@Directive({
  selector: '[remoteGridBinding]',
  standalone: true,
})
export class RemoteGridBindingDirective<T> {
  @Input()remoteGridBinding?: RemoteGridApi<T>;
  @Output()remoteGridReady = new EventEmitter();
  
  constructor() {}
  @HostListener('gridReady', ['$event']) 
  gridReady(event: GridReadyEvent<T, any>) {
    event.api.updateGridOptions({datasource: this.dataSource})
    this.remoteGridReady.emit(event);
  }
  
  handleError(err: any) {
    console.error(err);
  }
  
  dataSource: IDatasource = {
    getRows: (params: IGetRowsParams) => {
      if(!this.remoteGridBinding) return;

      this.remoteGridBinding
        .getData(params)
        .pipe(
          tap(({ data, totalRecords }) => 
            params.successCallback(data, totalRecords)
          ),
          // catchError(err => console.error(err)),
      )
      .subscribe();
    }
  };
}