// import { ColDef } from 'ag-grid-community';

// function generateColDefs<T extends object>(): ColDef<T>[] {
//   const colDefs: ColDef<T>[] = [];
//     const obj: T = {};
//   for (const key of Object.keys(obj) as Array<keyof T>) {
//     colDefs.push({
//       headerName: capitalizeFirstLetter(key as string),
//       field: key as string, // Using type assertion to treat key as string
//     } as ColDef<T>);
//   }

//   return colDefs;
// }

// function capitalizeFirstLetter(string: string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// query students {
//     students(
//       skip: null
//       take: null
//       where: { fullName: { contains: "2" } }
//       order: { nickName: DESC }
//     ) {
//       items {
//         dateOfBirth
//         id
//         nickName
//         studentId
//         fullName
//       }
//       totalCount
//       pageInfo {
//         hasNextPage
//         hasPreviousPage
//       }
//     }
//   }