import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { UpdateComponent } from './parent/update/update/update.component';

const routes: Routes = [
  {
      path: 'child1',
      component: Child1Component,
  },
  {
    path: 'child2',
    component: Child2Component
  },
  {
    path: 'child2/update/:index',
    component: UpdateComponent
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Child1Component, Child2Component, UpdateComponent]