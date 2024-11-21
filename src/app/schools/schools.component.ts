import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../shared/graphql-record-form/graphql-record-form.component';
import { GraphqlService } from '../shared/services/graphql.service';
import { Sex, SchoolModel, SchoolType } from '../../../graphql/generated';
import { MultiSelectFilterComponent } from '../shared/components/multi-select-filter/multi-select-filter.component';
import { CustomFloatingFilterComponent } from '../shared/components/custom-floating-filter/custom-floating-filter.component';
import { SchoolsService } from './schools.service';
import { BaseComponent } from '../shared/components/base/base.component';
import { GraphqlCollections, GraphqlTypes } from '../shared/enums';
import { GridComponent } from '../shared/components/grid/grid.component';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [
    GraphqlDataGridComponent
  ],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss'
})
export class SchoolsComponent extends GridComponent<SchoolModel> implements OnInit {
  override loadData(): void {
    throw new Error('Method not implemented.');
  }
  collectionKey: string = GraphqlCollections.SCHOOLS;

  constructor(
    private schoolsService: SchoolsService,
    private graphqlService: GraphqlService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
    super();
  }

  onRecordClicked($event: SchoolModel) {
    this.router.navigate(['/schools', $event.id]);
  }

  onNewClicked() {
    this.navigateToCreateRecord();
  }

  ngOnInit(): void {
    console.log('schools');
    this.activatedRoute.data.subscribe(data => {
      if (data['isCreate']) {
        this.openCreateModal();
      }
    });
  }

  openCreateModal(): void {
    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<SchoolModel, any>, {
      width: '1200px',
      data: {
        collection: GraphqlCollections.SCHOOLS,
        type: GraphqlTypes.SCHOOL,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      //reload data
      this.router.navigate(['/schools']);
      console.log(result);
    });
  }

  navigateToCreateRecord(): void {
    this.router.navigate(['create'], { relativeTo: this.activatedRoute });
  }

  navigateToEditRecord(id: string): void {
    this.router.navigate([id, 'edit'], { relativeTo: this.activatedRoute });
  }
  
  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<SchoolModel>[] = [
    { 
      field: "id",
      headerName: "ID",
      filter: "agNumberColumnFilter",
      hide: false,
     },
    { 
      field: "censusNo",
      headerName: "Census No",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "name",
      headerName: "Name",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "address",
      headerName: "Address",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "email",
      headerName: "Email",
      filter: "agDateColumnFilter",
    },
    { 
      field: "phoneNo",
      headerName: "Phone No",
      filter: "agDateColumnFilter",
    },
    { 
      field: "type",
      headerName: "Type",
      filter: MultiSelectFilterComponent, 
      filterParams: { 
        values: Object.values(SchoolType) 
      },
      floatingFilterComponent: CustomFloatingFilterComponent,
    },
    
  ];

  // colDefs: ColDef<School>[] = generateColDefs<School>();

  
}
