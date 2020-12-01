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
  posts =[]
  ngOnInit(): void {
    
    this.posts = this.myService.getPosts()
    console.log(this.posts);
    
  }
  delete(i){
    this.myService.deletePost(i) 
    }
}