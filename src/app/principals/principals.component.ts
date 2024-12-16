import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GraphqlDataGridComponent } from '../shared/graphql-data-grid/graphql-data-grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GraphqlRecordFormComponent } from '../shared/graphql-record-form/graphql-record-form.component';
import { enumToArray, GraphqlService } from '../shared/services/graphql.service';
import { Sex, PrincipalInput, PrincipalModel } from '../../../graphql/generated';
import { MultiSelectFilterComponent } from '../shared/components/multi-select-filter/multi-select-filter.component';
import { CustomFloatingFilterComponent } from '../shared/components/custom-floating-filter/custom-floating-filter.component';
import { BaseComponent } from '../shared/components/base/base.component';
import { GraphqlCollections, GraphqlTypes } from '../shared/enums';
import { GridComponent } from '../shared/components/grid/grid.component';
import { CREATE_PRINCIPAL } from '../shared/mutations';
import { PRINCIPAL_PROCESSED } from '../shared/subscriptions';

@Component({
  selector: 'app-principals',
  standalone: true,
  imports: [
    GraphqlDataGridComponent
  ],
  templateUrl: './principals.component.html',
  styleUrl: './principals.component.scss'
})
export class PrincipalsComponent extends GridComponent<PrincipalModel> implements OnInit {
  override loadData(): void {
    this.router.navigate(['/principals']);
  }
  collectionKey: string = GraphqlCollections.PRINCIPALS;

  constructor(
    private graphqlService: GraphqlService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
  ) {
    super();
  }

  onRecordClicked($event: PrincipalModel) {
    this.router.navigate(['/principals', $event.id]);
  }

  onAddNewClicked() {
    this.openCreateModal();
  }

  ngOnInit(): void {
    this.subscriptions.push(PRINCIPAL_PROCESSED);
    console.log('principals');
    this.activatedRoute.data.subscribe(data => {
      if (data['isCreate']) {
        this.openCreateModal();
      }
    });
  }

  openCreateModal(): void {
    
    const fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-12 col-md-6',
            key: 'fullName',
            type: 'input',
            props: {
              label: 'Full Name',
              type: 'text',
              placeholder: 'Enter Full Name',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'shortName',
            type: 'input',
            props: {
              label: 'Short Name',
              type: 'text',
              placeholder: 'Enter Short Name',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'dateOfBirth',
            type: 'datepicker',
            props: {
              label: 'Date of Birth',
              type: 'datepicker',
              placeholder: 'Enter Date of Birth',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'sex',
            type: 'select',
            props: {
              label: 'Sex',
              type: 'select',
              placeholder: 'Select Sex',
              options: enumToArray(Sex).map(x => ({ label: x.caption, value: x.value })),
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'address',
            type: 'input',
            props: {
              label: 'address',
              type: 'textarea',
              placeholder: 'Enter Address',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'mobileNo',
            type: 'input',
            props: {
              label: 'Mobile No',
              type: 'phone',
              placeholder: 'Enter Mobile No',
              required: true,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'bcNo',
            type: 'input',
            props: {
              label: 'Birth Certificate No',
              type: 'text',
              placeholder: 'Enter Birth Certificate No',
              required: false,
            },
          },
          {
            className: 'col-12 col-md-6',
            key: 'nicNo',
            type: 'input',
            props: {
              label: 'National Identity Card No',
              type: 'text',
              placeholder: 'Enter National Identity Card No',
              required: true,
            },
          },
        ],
      },
      // {
      //   className: 'section-label',
      //   template: '<hr /><div><strong>Address:</strong></div>',
      // },
  
    ];

    const model: PrincipalInput = {
      fullName: '',
      shortName: '',
      dateOfBirth: '',
      sex: Sex.Male,
      address: '',
      mobileNo: '',
      bcNo: '',
      nicNo: '',
    };

    const dialogRef = this.matDialog.open(GraphqlRecordFormComponent<PrincipalInput>, {
      width: '1200px',
      data: {
        title: 'Principal',
        model,
        fields,
        recordCreateMutation: CREATE_PRINCIPAL,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  navigateToCreateRecord(): void {
    this.router.navigate(['create'], { relativeTo: this.activatedRoute });
  }

  navigateToEditRecord(id: string): void {
    this.router.navigate([id, 'edit'], { relativeTo: this.activatedRoute });
  }

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<PrincipalModel>[] = [
    { 
      field: "id",
      headerName: "ID",
      filter: "agNumberColumnFilter",
      hide: false,
     },
    { 
      field: "fullName",
      headerName: "Full Name",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "shortName",
      headerName: "Short Name",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "nickname",
      headerName: "Nickname",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "dateOfBirth",
      headerName: "Date of Birth",
      filter: "agDateColumnFilter",
    },
    { 
      field: "sex",
      headerName: "Sex",
      filter: MultiSelectFilterComponent, 
      filterParams: { 
        values: Object.values(Sex) 
      },
      floatingFilterComponent: CustomFloatingFilterComponent,
    },
    { 
      field: "bcNo",
      headerName: "BC No",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "nicNo",
      headerName: "NIC No",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "mobileNo",
      headerName: "Mobile No",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "email",
      headerName: "Email",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "address",
      headerName: "Address",
      filter: 'agTextColumnFilter',
    },
    { 
      field: "passportNo",
      headerName: "Passport No",
      filter: 'agTextColumnFilter',
    },
  ];

  // colDefs: ColDef<Principal>[] = generateColDefs<Principal>();

  
}
