import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../Models/Author';

@Component({
  selector: 'sec5',
  templateUrl: './sec5.component.html',
  styleUrls: ['./sec5.component.scss']
})
export class Sec5Component implements OnInit {
  @Input() author:Author;
  @Input() Header:string;
  @Input() Caption:string;
  @Input() OverlayImage:string="/assets/images/Snowflake.png";
  constructor() { }

  ngOnInit(): void {
  }

}
