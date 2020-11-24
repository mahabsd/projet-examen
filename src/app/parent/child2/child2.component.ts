import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public constructor(private myService: FormService) {

}
  users =[]
  ngOnInit(): void {
    
    this.users = this.myService.getUsers()
    console.log(this.users);
    
  }
  delete(i){
    this.myService.deleteUser(i) 
    }
}