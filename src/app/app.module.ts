import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Sec1Component } from './sec1/sec1.component';
import { Sec2Component } from './sec2/sec2.component';
import { Sec3Component } from './sec3/sec3.component';
import { Sec4Component } from './sec4/sec4.component';
import { Sec5Component } from './sec5/sec5.component';
import { ModalComponent } from './modal/modal.component';

import { Sec6Component } from './sec6/sec6.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Sec1Component,
    Sec2Component,
    Sec3Component,
    Sec4Component,
    Sec5Component,
    Sec6Component,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
