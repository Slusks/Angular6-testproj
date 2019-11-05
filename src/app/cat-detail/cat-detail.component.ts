import { Component, OnInit, Input } from '@angular/core';
import { cat } from '../cat';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  @Input() cat: cat;

  constructor() { }

  ngOnInit() {
  }

}
