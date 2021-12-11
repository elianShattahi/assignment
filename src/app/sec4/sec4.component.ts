import { Component, Input, OnInit } from '@angular/core';
import { SplitItem } from '../Models/SplitItem';

@Component({
  selector: 'sec4',
  templateUrl: './sec4.component.html',
  styleUrls: ['./sec4.component.scss']
})
export class Sec4Component implements OnInit {
  @Input() SplitItems:SplitItem[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
