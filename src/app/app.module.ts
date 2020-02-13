import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IdentificationComponent } from './identification/identification.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, IdentificationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
