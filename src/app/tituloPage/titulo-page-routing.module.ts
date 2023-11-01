import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TituloResolver} from "./guards/titulo.resolver";
import { TituloFormComponent } from "./containers/tituloForm/titulo-form.component";
import { TituloComponent } from "./containers/tituloComponent/titulo-component.component";

const routes: Routes = [
  { path: '', component: TituloComponent },
  { path: 'novo', component: TituloFormComponent, resolve: { titulo: TituloResolver }  },
  { path: 'editar/:id', component: TituloFormComponent, resolve: { titulo: TituloResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TituloRoutingModule { }
