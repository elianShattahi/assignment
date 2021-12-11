import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() Show:boolean= false;
  @Output()
  BtnClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() Caption:string = "";
  @Input() Header:string = "";
  @Input() Image:string = "/assets/images/logo.png";
  constructor() { }

  ngOnInit(): void {
  }

}
