import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  //posts = [];
  constructor() { 
  }

  addPosts(post) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post)
    localStorage.setItem('posts',JSON.stringify(posts));
   // this.posts = posts

  }
  getPosts() {

    return JSON.parse(localStorage.getItem("posts")) || [];
  }
  deletePost(i){
    console.log(i);
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(i, 1);
  //  this.posts = posts
    localStorage.setItem('posts',JSON.stringify(posts));
  // console.log(this.posts);
  window.location.reload();

  };
  updatePost(i, post) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.splice(i, 1, post.value);
    localStorage.setItem('posts',JSON.stringify(posts));
  //  this.posts = posts

  }

}
