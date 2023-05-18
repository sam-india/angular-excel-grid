import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { ExcelGridComponent } from './excel-grid/excel-grid.component';
import { SelectRendererComponent } from './select-renderer/select-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelGridComponent,
    SelectRendererComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([SelectRendererComponent]),
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
