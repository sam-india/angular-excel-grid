import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-select-renderer',
  template: `
    <mat-select
      [(ngModel)]="selectedOptions"
      (ngModelChange)="onValueChanged()"
      [multiple]="true"
    >
      <mat-option *ngFor="let option of options" [value]="option">
        {{ option }}
      </mat-option>
    </mat-select>
  `,
  styles: [``]
})
export class SelectRendererComponent implements ICellRendererAngularComp {
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedOptions: string[] = [];

  agInit(params: any): void {
    this.selectedOptions = params.value;
  }

  refresh(params: any): boolean {
    return false;
  }

  onValueChanged() {
    const value = this.selectedOptions;
    this.params.api.stopEditing();
    this.params.api.updateRowData({ update: [{ ...this.params.data, column1: value }] });
  }
}
