import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtorComponent } from './containers/atorComponent/ator-component.component';
import { AtorFormComponent } from "./containers/atorForm/ator-form.component";
import {AtorResolver} from "./guards/ator.resolver";

const routes: Routes = [
  { path: '', component: AtorComponent },
  { path: 'novo', component: AtorFormComponent, resolve: { ator: AtorResolver }  },
  { path: 'editar/:id', component: AtorFormComponent, resolve: { ator: AtorResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtorRoutingModule { }
