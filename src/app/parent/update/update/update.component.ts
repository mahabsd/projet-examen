import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/service/form.service';
import { passwordValidator } from '../../child1/shared/password.validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private myService: FormService, private router: ActivatedRoute,  private route:Router) { }
  users;
  loggedUser;
  id = this.router.snapshot.paramMap.get('index');
  user = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  }, { validators: passwordValidator })
  ngOnInit(): void {
    // this.user = this.myService.getUsers()
    console.log(this.user);


    this.users = this.myService.getUsers()
    
  
    // this.user = this.users[this.id]
    console.log(this.id);
    console.log(this.user);
    this.user.patchValue({
      userName: this.users[this.id].userName,
      email: this.users[this.id].email,
      password: this.users[this.id].password,
      confirmPassword: this.users[this.id].confirmPassword,
    })
  
  }


  // loadApiData() {
  //   // this.user = this.users[this.id]
  //   console.log(this.id);
  //   console.log(this.user);
  //   this.user.patchValue({
  //     userName: this.users[this.id].userName,
  //     email: this.users[this.id].email,
  //     password: this.users[this.id].password,
  //     confirmPassword: this.users[this.id].confirmPassword,
  //   })
  // }

  update(user) {
    var i = this.id
    this.myService.updateUser(i, user)
    this.route.navigateByUrl("/child2");
  }



}
