import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiretorFormComponent} from "./containers/diretorForm/diretor-form.component";
import {DiretorComponent} from "./containers/diretorComponent/diretor-component.component";
import {DiretorResolver} from "./guards/diretor.resolver";

const routes: Routes = [
  { path: '', component: DiretorComponent },
  { path: 'novo', component: DiretorFormComponent, resolve: { diretor: DiretorResolver }  },
  { path: 'editar/:id', component: DiretorFormComponent, resolve: { diretor: DiretorResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretorRoutingModule { }
