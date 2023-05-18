import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-excel-grid',
  templateUrl: './excel-grid.component.html',
  styleUrls: ['./excel-grid.component.css']
})
export class ExcelGridComponent implements OnInit {
  gridData: any[] = [];
  columnDefs: any[] = [
    {
      field: 'column1',
      headerName: 'Column 1',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Option 1', 'Option 2', 'Option 3'],
        multiple: true
      },
      cellRendererFramework: SelectRendererComponent
    },
    // Add other columns as needed
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/data').subscribe(data => {
      this.gridData = data;
    });
  }

  onCellValueChanged(event: any) {
    const updatedItem = event.data;
    this.http.put('http://localhost:8080/api/data/' + updatedItem.id, updatedItem).subscribe();
  }

  onPaste(event: ClipboardEvent) {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData.getData('text');
    const rows = pastedText.split('\n');
    const newData = rows.map(row => row.split('\t'));
    this.gridData = newData;
  }
}
