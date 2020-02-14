import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IdentificationComponent } from './identification/identification.component';
import { AuthentificationService } from './@shared/authentification.service';
import { BoiteIdeeComponent } from './boite-idee/boite-idee.component';
import { RouterModule, Routes} from './@angular/router';

const rout : Routes =  [
  { path : 'boite-idee', component:BoiteIdeeComponent },
  { path : 'identification', component:IdentificationComponent },
  { path : '', component:IdentificationComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgModule, RouterModule.forRoot(rout) ],
  declarations: [ AppComponent, IdentificationComponent, BoiteIdeeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthentificationService]
})
export class AppModule { }
