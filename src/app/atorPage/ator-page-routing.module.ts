import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtorComponent } from './atorComponent/ator-component.component';

const routes: Routes = [
  { path: '', component: AtorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtorRoutingModule { }
