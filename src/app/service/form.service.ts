import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  users = [];
  constructor() { 
  }

  addUsers(user){
   this.users.push(user)
  }
  getUsers() {

    return this.users
  }
  updateUser(i, user) {

    this.users.splice(i, 1, user.value);
  }
  deleteUser(i){
    console.log(i);
    this.users.splice(i,1);

  };
}
