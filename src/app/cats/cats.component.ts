import { Component, OnInit } from '@angular/core';
import { cat } from '../cat';
import { CATS } from '../mock-cats';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats = CATS;
  selectedcat: cat;

  constructor() { }

  ngOnInit() {
  }
  /* the section below is what gets called when you click on the selection, this assigns the selected cat to the component above */
  onSelect(cat: cat): void {
    this.selectedcat = cat;
  }

}
