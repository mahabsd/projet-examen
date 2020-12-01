import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './parent/add-post/add-post.component';
import { Child2Component } from './parent/list-post/list-post.component';
import { UpdateComponent } from './parent/update/update/update-post.component';

const routes: Routes = [

  {
    path: 'add-post',
    component: Child1Component,

  },
  {
    path: 'list-post',
    component: Child2Component,
  },
  {
    path: 'list-post/update/:index',
    component: UpdateComponent,
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Child1Component, Child2Component, UpdateComponent]