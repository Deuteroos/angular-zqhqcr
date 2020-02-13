import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IdentificationComponent } from './identification/identification.component';
import { AuthentificationService } from './@shared/authentification.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, IdentificationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthentificationService]
})
export class AppModule { }
