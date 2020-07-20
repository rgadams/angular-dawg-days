import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatsComponent} from './components/cats/cats.component';
import {ParentComponent} from './components/parent/parent.component';


const routes: Routes = [
  { path: 'cats', component: CatsComponent },
  { path: 'parent', component: ParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
