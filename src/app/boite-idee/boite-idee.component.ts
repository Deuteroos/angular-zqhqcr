import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../@shared/authentification.service'
import { User } from '../models/User'

@Component({
  selector: 'app-boite-idee',
  templateUrl: './boite-idee.component.html',
  styleUrls: ['./boite-idee.component.css']
})
export class BoiteIdeeComponent implements OnInit {

  user : User;

  constructor( private userServ : AuthentificationService) { }

  ngOnInit() {
    this.user = this.userServ.getUser();
  }

}