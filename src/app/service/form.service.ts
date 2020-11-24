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

  addUsers(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    this.users.push(user)
    localStorage.setItem('users',JSON.stringify(users));

  }
  getUsers() {

    return this.users
  }
  deleteUser(i){
    console.log(i);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    this.users.splice(i,1);
    localStorage.setItem('users',JSON.stringify(this.users));

  };
  updateUser(i, user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    this.users.splice(i, 1, user.value);
    localStorage.setItem('users',JSON.stringify(this.users));

  }

}
