import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/service/form.service';
import { passwordValidator } from '../../child1/shared/password.validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
users = []
  constructor( private myService: FormService) { }
  user;
  ngOnInit(): void {
    // this.users = this.myService.getUsers()
    // console.log(this.users);
    
  // this.user = new FormGroup({
  //   userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   skills: new FormArray([]),
  // }, {validators: passwordValidator})
   }
  // update(i, user) {
  //  this.myService.updateUser(i,user)
  // }
}
