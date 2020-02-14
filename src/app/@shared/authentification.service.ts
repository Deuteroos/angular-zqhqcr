import { Injectable } from '@angular/core';
import { User } from '../models/User'

@Injectable()
export class AuthentificationService {
  private user : User;
  constructor() { }

  authentification(login : string){
   this.user = { login : login };
  }

  getUser() {
    return this.user;
  }
}
