import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from "../shared/app-material/app-material.module";
import {SharedModule} from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import {ClasseComponent} from "./containers/classeComponent/classe-component.component";
import {ClasseFormComponent} from "./containers/classeForm/classe-form.component";
import {ClasseListComponent} from "./components/classeList/classe-list.component";
import {ClasseRoutingModule} from "./classe-page-routing.module";

@NgModule({
  declarations: [
    ClasseComponent,
    ClasseFormComponent,
    ClasseListComponent
  ],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClassePageModule { }
