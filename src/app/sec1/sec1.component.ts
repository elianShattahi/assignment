import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sec1',
  templateUrl: './sec1.component.html',
  styleUrls: ['./sec1.component.scss']
})
export class Sec1Component implements OnInit {
  @Output()
  BtnClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() Caption:string = "";
  @Input() Header:string = "";
  @Input() Image:string = "/assets/images/landing-bg.png";
  constructor() { }

  ngOnInit(): void {
  }

}
