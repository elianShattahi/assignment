import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../Models/Card';

@Component({
  selector: 'sec2',
  templateUrl: './sec2.component.html',
  styleUrls: ['./sec2.component.scss']
})
export class Sec2Component implements OnInit {
  @Output()
  BtnClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() Caption:string = "";
  @Input() Header:string = "";

  @Input() Cards:Card[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
