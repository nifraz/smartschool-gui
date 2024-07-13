import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { 
  ColDef,
  ColGroupDef,
  GetContextMenuItems,
  GetContextMenuItemsParams,
  GridApi,
  GridOptions,
  GridReadyEvent,
  MenuItemDef,
  ModuleRegistry,
  RowClickedEvent,
  createGrid,
} from 'ag-grid-community'; // Column Definition Type Interface
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-graphql-data-grid',
  standalone: true,
  imports: [
    AgGridAngular,
    CommonModule,
    RouterLink
  ],
  templateUrl: './graphql-data-grid.component.html',
  styleUrl: './graphql-data-grid.component.scss'
})
export class GraphqlDataGridComponent<T> implements OnInit {

  @Output()recordClicked: EventEmitter<T> = new EventEmitter<T>();

  constructor(private apollo: Apollo) {}
  
  ngOnInit(): void {
    console.log('graphql');
    this.apollo
      .watchQuery({
        query: gql`
          query {
            students {
              items {
                dateOfBirth
                id
                nickName
                studentId
              }
            }
          }
        `
      })
      .valueChanges.subscribe((result: any) => {
        // this.rowData = result?.data?.students;
        console.log(result);
      });
  }
    
  onRowClicked($event: RowClickedEvent<T,any>) {
    this.recordClicked.emit($event.data);
  }

  @Input()themeClass: string = "ag-theme-quartz-dark";

  // Row Data: The data to be displayed.
  @Input()rowData: T[] = [];

  // Column Definitions: Defines & controls grid columns.
  @Input()colDefs: ColDef<T>[] = [];

  public defaultColDef: ColDef = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
  };
  public rowSelection: "single" | "multiple" = "multiple";
  public paginationPageSize = 10;
  public paginationPageSizeSelector: number[] | boolean = [10, 25, 50];

  onGridReady(params: GridReadyEvent<T>) {
    // this.http
    //   .get<
    //     IOlympicData[]
    //   >("https://www.ag-grid.com/example-assets/olympic-winners.json")
    //   .subscribe((data) => (this.rowData = data));
  }

  getContextMenuItems(
    params: GetContextMenuItemsParams,
  ): (string | MenuItemDef)[] {
    var result: (string | MenuItemDef)[] = [
      {
        // custom item
        name: "Alert " + params.value,
        action: () => {
          window.alert("Alerting about " + params.value);
        },
        cssClasses: ["red", "bold"],
      },
      {
        // custom item
        name: "Always Disabled",
        disabled: true,
        tooltip:
          "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!",
      },
      {
        name: "Country",
        subMenu: [
          {
            name: "Ireland",
            action: () => {
              console.log("Ireland was pressed");
            },
            // icon: createFlagImg("ie"),
          },
          {
            name: "UK",
            action: () => {
              console.log("UK was pressed");
            },
            // icon: createFlagImg("gb"),
          },
          {
            name: "France",
            action: () => {
              console.log("France was pressed");
            },
            // icon: createFlagImg("fr"),
          },
        ],
      },
      {
        name: "Person",
        subMenu: [
          {
            name: "Niall",
            action: () => {
              console.log("Niall was pressed");
            },
          },
          {
            name: "Sean",
            action: () => {
              console.log("Sean was pressed");
            },
          },
          {
            name: "John",
            action: () => {
              console.log("John was pressed");
            },
          },
          {
            name: "Alberto",
            action: () => {
              console.log("Alberto was pressed");
            },
          },
          {
            name: "Tony",
            action: () => {
              console.log("Tony was pressed");
            },
          },
          {
            name: "Andrew",
            action: () => {
              console.log("Andrew was pressed");
            },
          },
          {
            name: "Kev",
            action: () => {
              console.log("Kev was pressed");
            },
          },
          {
            name: "Will",
            action: () => {
              console.log("Will was pressed");
            },
          },
          {
            name: "Armaan",
            action: () => {
              console.log("Armaan was pressed");
            },
          },
        ],
      },
      "separator",
      {
        // custom item
        name: "Windows",
        shortcut: "Alt + W",
        action: () => {
          console.log("Windows Item Selected");
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />',
      },
      {
        // custom item
        name: "Mac",
        shortcut: "Alt + M",
        action: () => {
          console.log("Mac Item Selected");
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      "separator",
      {
        // custom item
        name: "Checked",
        checked: true,
        action: () => {
          console.log("Checked Selected");
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      "copy",
      "separator",
      "chartRange",
    ];
    return result;
  }
}
