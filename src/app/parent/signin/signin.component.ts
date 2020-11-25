import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuardserviceService } from 'src/app/service/guardservice.service';
import { Router } from '@angular/router';
import { passwordValidator } from '../child1/shared/password.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  registForm: FormGroup;
  submited: boolean = false;
  constructor(private AuthServices: GuardserviceService, private route:Router) { }

  ngOnInit(): void {
     this.registForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
     },
       { validators: passwordValidator }
    );
   
  }
  submitregister() {
    this.submited = true;
    if (this.registForm.invalid) {
      return;
    }
    this.AuthServices.register(this.registForm.value);
    this.route.navigateByUrl("/child1");
    
  }
  
}
