import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from "../shared/app-material/app-material.module";
import {SharedModule} from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import {DiretorComponent} from "./containers/diretorComponent/diretor-component.component";
import {DiretorFormComponent} from "./containers/diretorForm/diretor-form.component";
import {DiretorListComponent} from "./components/diretorList/diretor-list.component";
import {DiretorRoutingModule} from "./diretor-page-routing.module";

@NgModule({
  declarations: [
    DiretorComponent,
    DiretorFormComponent,
    DiretorListComponent
  ],
  imports: [
    CommonModule,
    DiretorRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DiretorPageModule { }
