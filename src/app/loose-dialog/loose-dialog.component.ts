import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loose-dialog',
  templateUrl: './loose-dialog.component.html',
  styleUrls: ['./loose-dialog.component.scss']
})
export class LooseDialogComponent implements OnInit {
  gifList = [  
    "../../../assets/gifs/loose1.gif", 
    "../../../assets/gifs/loose2.gif", 
    "../../../assets/gifs/loose3.gif",
    "../../../assets/gifs/loose4.gif",
  ];

  randomGif: string = "";

  ngOnInit(): void {
    this.randomGif = this.gifList[Math.floor(Math.random() * this.gifList.length)];
  }

}
