import { Component,OnInit } from '@angular/core';
import { Author } from './Models/Author';
import { Card } from './Models/Card';
import { SplitItem } from './Models/SplitItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  showmodal:boolean=false;
  sec1Header:string = "Simple PSD Tamplate With Cool Stuff";
  sec1Caption:string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
  Cards:Card[]=[{Caption:"suspendisse vel leo efficitur, venenatis est ut, tincidunt mibh",Header:"Lorem ipsum dolor sit amet",image:"/assets/images/c1.png"},{Caption:"suspendisse vel leo efficitur, venenatis est ut, tincidunt mibh",Header:"Lorem ipsum dolor sit amet",image:"/assets/images/c2.png"},{Caption:"suspendisse vel leo efficitur, venenatis est ut, tincidunt mibh",Header:"Lorem ipsum dolor sit amet",image:"/assets/images/c3.png"},{Caption:"suspendisse vel leo efficitur, venenatis est ut, tincidunt mibh",Header:"Lorem ipsum dolor sit amet",image:"/assets/images/c4.png"}];
  sec2Header:string ="Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
  sec2Caption:string ="Simple PSD Tamplate With Cool Stuff";
  sec3SplitItems:SplitItem[]=[{Caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur voluptas nulla deleniti? Sequi, ea necessitatibus aspernatur doloribus odit voluptatibus.",Header:"Lorem ipsum dolor",image:"/assets/images/ic1.png"},{Caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur voluptas nulla deleniti? Sequi, ea necessitatibus aspernatur doloribus odit voluptatibus.",Header:"Lorem ipsum dolor",image:"/assets/images/ic2.png"}];
  sec4SplitItems:SplitItem[]=[{Caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur voluptas nulla deleniti? Sequi, ea necessitatibus aspernatur doloribus odit voluptatibus.",Header:"Lorem ipsum dolor",image:"/assets/images/app1.png"},{Caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur voluptas nulla deleniti? Sequi, ea necessitatibus aspernatur doloribus odit voluptatibus.",Header:"Lorem ipsum dolor",image:"/assets/images/app2.png"}];
  sec5Header:string ="Tamplate is awesome";
  sec5Caption:string ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur voluptas nulla deleniti? Sequi, ea necessitatibus aspernatur doloribus odit voluptatibus.";
  author:Author={Company:"Crios.com",FirstName:"Johne",LastName:"Doe",JobTitle:"CEO",ProfileImage:"/assets/images/user-photo.png"}
  sec6Header:string = "Simple PSD Tamplate With Cool Stuff";
  sec6Caption:string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
  constructor(){

}
ShowModal(){
  this.showmodal = true;
}
HideModal(){
  this.showmodal = false;
}
}
