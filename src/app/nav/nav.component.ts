import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Output()
  MenuBtnClick: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  SearchBtnClick: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  MainBtnClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
