import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss']
})
export class ChangesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  currentFontSize: number = 14;
  directiveEnable: boolean = true;

  btnIncrease(): void {
    this.currentFontSize++;
  }

  btnDecrease(): void {
    if (this.currentFontSize === 14) {
      return;
    } else {
      this.currentFontSize--;
    }
  }
}
