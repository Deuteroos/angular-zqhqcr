import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {
  private user : User;
  constructor() { }

  authentification(login : string){
    this.user = { login : login };
  }

  get() {
    return this.user;
  }
}

export class User {
  login : string;
}