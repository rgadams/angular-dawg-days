import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatsComponent} from './components/cats/cats.component';
import {ParentComponent} from './components/parent/parent.component';
import {DirectivesComponent} from './components/directives/directives.component';


const routes: Routes = [
  { path: 'cats', component: CatsComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'structural_directives', component: DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
