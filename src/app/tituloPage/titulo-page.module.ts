import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from "../shared/app-material/app-material.module";
import {SharedModule} from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import {TituloComponent} from "./containers/tituloComponent/titulo-component.component";
import {TituloFormComponent} from "./containers/tituloForm/titulo-form.component";
import {TituloListComponent} from "./components/tituloList/titulo-list.component";
import {TituloRoutingModule} from "./titulo-page-routing.module";

@NgModule({
  declarations: [
    TituloComponent,
    TituloFormComponent,
    TituloListComponent
  ],
  imports: [
    CommonModule,
    TituloRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TituloPageModule { }
