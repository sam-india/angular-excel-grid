Make sure to replace 'http://localhost:8080/api/data' with the actual URL of your Spring Boot API endpoint.

Ensure that these modules and dependencies are imported correctly in your app.module.ts file as shown in the previous code examples.

Modules:
BrowserModule from @angular/platform-browser
HttpClientModule from @angular/common/http
FormsModule from @angular/forms
AgGridModule from ag-grid-angular
MatSelectModule from @angular/material/select

Dependencies:
ag-grid-angular (Install using npm install ag-grid-angular)
@angular/material (Install using ng add @angular/material)

This code includes the copy-paste functionality in the ExcelGridComponent that allows you to paste data from Excel into the grid. The onPaste event handler splits the pasted data into rows and columns and updates the grid data accordingly.
