import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  //users = [];
  constructor() { 
  }

  addUsers(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users));
   // this.users = users

  }
  getUsers() {

    return JSON.parse(localStorage.getItem("users")) || [];
  }
  deleteUser(i){
    console.log(i);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(i, 1);
  //  this.users = users
    localStorage.setItem('users',JSON.stringify(users));
  // console.log(this.users);
  window.location.reload();

  };
  updateUser(i, user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.splice(i, 1, user.value);
    localStorage.setItem('users',JSON.stringify(users));
  //  this.users = users

  }

}
