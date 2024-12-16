import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../shared/graphql-record-form/graphql-record-form.component';
import { enumToArray, GraphqlCollectionResponse, GraphqlService } from '../shared/services/graphql.service';
import { Sex, SchoolModel, SchoolType, SchoolInput, DivisionModel } from '../../../graphql/generated';
import { MultiSelectFilterComponent } from '../shared/components/multi-select-filter/multi-select-filter.component';
import { CustomFloatingFilterComponent } from '../shared/components/custom-floating-filter/custom-floating-filter.component';
import { BaseComponent } from '../shared/components/base/base.component';
import { GraphqlCollections, GraphqlTypes } from '../shared/enums';
import { GridComponent } from '../shared/components/grid/grid.component';
import { CREATE_SCHOOL } from '../shared/mutations';
import { GET_DIVISIONS_FILTERED_BY_NAME } from '../shared/queries';
import { debounceTime, map } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { SCHOOL_PROCESSED } from '../shared/subscriptions';
import { TypedDocumentNode } from 'apollo-angular';

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
    this.router.navigate(['/schools']);
  }
  collectionKey: string = GraphqlCollections.SCHOOLS;
  
  constructor(
    private graphqlService: GraphqlService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
    super();
  }

  onRecordClicked($event: SchoolModel) {
    this.router.navigate([ 'schools', $event.id ]);
  }

  onAddNewClicked() {
    this.openCreateModal();
  }

  ngOnInit(): void {
    this.subscriptions.push(SCHOOL_PROCESSED);
    console.log('schools');
    this.activatedRoute.data.subscribe(data => {
      if (data['isCreate']) {
        this.openCreateModal();
      }
    });
  }

  openCreateModal(): void {
    const getDivisionsFilteredByName$ = (filter: string) => this.graphqlService.getGqlQueryObservable(GET_DIVISIONS_FILTERED_BY_NAME, { filter }).pipe(
      debounceTime(300),
      map((res: GraphqlCollectionResponse<DivisionModel>) => {
        return res.data[GraphqlCollections.DIVISIONS].items
        .map((x: DivisionModel) => ({ value: x.id, label: `${x.label}` }));
      })
    );

    const fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-12 col-md-12',
            key: 'divisionId',
            type: 'autocomplete',
            props: {
              label: 'Division',
              type: 'autocomplete',
              placeholder: 'Enter Division',
              filter: (search: string) => getDivisionsFilteredByName$(search),
              required: true,
            },
            validators: {
              validation: [(x: AbstractControl) => x && x.value && x.value.value ? null : { 'divisionId': true }],
            },
          },
          {
            className: 'col-12 col-md-12',
            key: 'name',
            type: 'input',
            props: {
              label: 'Name',
              type: 'text',
              placeholder: 'Enter Name',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'censusNo',
            type: 'input',
            props: {
              label: 'Census No',
              type: 'text',
              placeholder: 'Enter Census No',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'type',
            type: 'select',
            props: {
              label: 'Type',
              type: 'select',
              placeholder: 'Select Type',
              options: enumToArray(SchoolType).map(x => ({ label: x.caption, value: x.value })),
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'location',
            type: 'input',
            props: {
              label: 'Location',
              type: 'text',
              placeholder: 'Enter Location',
              required: true,
            },
          },
          // {
          //   className: 'col-12 col-md-6',
          //   key: 'dateOfBirth',
          //   type: 'datepicker',
          //   props: {
          //     label: 'Date of Birth',
          //     type: 'datepicker',
          //     placeholder: 'Enter Date of Birth',
          //     required: true,
          //   },
          // },
          {
            className: 'col-12 col-md-6',
            key: 'phoneNo',
            type: 'input',
            props: {
              label: 'Phone No',
              type: 'phone',
              placeholder: 'Enter Phone No',
              required: false,
            },
          },
          {
            className: 'col-12 col-md-12',
            key: 'address',
            type: 'input',
            props: {
              label: 'address',
              type: 'textarea',
              placeholder: 'Enter Address',
              required: false,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'email',
            type: 'input',
            props: {
              label: 'Email',
              type: 'email',
              placeholder: 'Enter Email',
              required: false,
            },
          },
        ],
      },
      // {
      //   className: 'section-label',
      //   template: '<hr /><div><strong>Address:</strong></div>',
      // },
  
    ];

    const model: SchoolInput = {
      censusNo: '',
      name: '',
      location: '',
      address: '',
      email: '',
      phoneNo: '',
      type: SchoolType.Type1Ab,
      divisionId: 0,
    };

    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<SchoolInput>, {
      width: '1200px',
      data: {
        title: 'School',
        model,
        fields,
        recordCreateMutation: CREATE_SCHOOL,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
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
      filter: "agTextColumnFilter",
    },
    { 
      field: "phoneNo",
      headerName: "Phone No",
      filter: "agTextColumnFilter",
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
