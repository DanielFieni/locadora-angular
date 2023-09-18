import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtorComponent } from './containers/atorComponent/ator-component.component';
import { AtorRoutingModule } from './ator-page-routing.module';
import { AppMaterialModule } from "../shared/app-material/app-material.module";
import {SharedModule} from "../shared/shared.module";
import { AtorFormComponent } from './containers/atorForm/ator-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AtorListComponent } from './components/atorList/ator-list.component';

@NgModule({
  declarations: [
    AtorComponent,
    AtorFormComponent,
    AtorListComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AtorPageModule { }
