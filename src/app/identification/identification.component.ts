import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../@shared/authentification.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit  {

  constructor(private authenService : AuthentificationService) { 
   
  }
  value = '';
  ngOnInit() {
    this.authenService.get();
  }

  onClick(value: string) {
    this.authenService.authentification(value); 
  }





}