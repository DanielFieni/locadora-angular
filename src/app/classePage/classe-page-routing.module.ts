import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseResolver} from "./guards/classe.resolver";
import {ClasseFormComponent} from "./containers/classeForm/classe-form.component";
import {ClasseComponent} from "./containers/classeComponent/classe-component.component";

const routes: Routes = [
  { path: '', component: ClasseComponent },
  { path: 'novo', component: ClasseFormComponent, resolve: { classe: ClasseResolver }  },
  { path: 'editar/:id', component: ClasseFormComponent, resolve: { classe: ClasseResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
