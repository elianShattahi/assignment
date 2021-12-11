import { Component, Input, OnInit } from '@angular/core';
import { SplitItem } from '../Models/SplitItem';

@Component({
  selector: 'sec3',
  templateUrl: './sec3.component.html',
  styleUrls: ['./sec3.component.scss']
})
export class Sec3Component implements OnInit {
  @Input() SplitItems:SplitItem[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
