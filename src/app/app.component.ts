import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LooseDialogComponent } from './loose-dialog/loose-dialog.component';
import { SuccesDialogComponent } from './succes-dialog/succes-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  colors: {color: string, expectedOrder: number, currentValue: number}[] = [
    {color: 'red', expectedOrder: 2, currentValue: 0}, 
    {color: 'blue', expectedOrder: 5, currentValue: 0}, 
    {color: 'yellow', expectedOrder: 3, currentValue: 0}, 
    {color: 'green', expectedOrder: 1, currentValue: 0}, 
    {color: 'purple', expectedOrder: 6, currentValue: 0}, 
    {color: 'cyan', expectedOrder: 0, currentValue: 0}, 
    {color: 'white', expectedOrder: 4, currentValue: 0}
  ];

  ngOnInit(): void {
    // Check config
     
  }

  isLocked() {
    let locking = false;
    this.colors.forEach((color) => {
      if (color.currentValue != color.expectedOrder) {
        locking = true;
      }
    })
    return locking;
  }

  valid() {
    if (!this.isLocked()) {
      this.dialog.open(SuccesDialogComponent);
    } else {
      this.dialog.open(LooseDialogComponent);
    }
  }
}
