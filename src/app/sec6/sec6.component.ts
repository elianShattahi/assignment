import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sec6',
  templateUrl: './sec6.component.html',
  styleUrls: ['./sec6.component.scss']
})
export class Sec6Component implements OnInit {
  @Output()
  BtnClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() Caption:string = "";
  @Input() Header:string = "";
  @Input() Image:string = "/assets/images/footer-bg.png";
  constructor() { }

  ngOnInit(): void {
  }

}
