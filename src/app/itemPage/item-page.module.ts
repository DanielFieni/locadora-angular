import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from "../shared/app-material/app-material.module";
import {SharedModule} from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import {ItemComponent} from "./containers/itemComponent/item-component.component";
import {ItemFormComponent} from "./containers/itemForm/item-form.component";
import {ItemListComponent} from "./components/itemList/item-list.component";
import {ItemRoutingModule} from "./item-page-routing.module";

@NgModule({
  declarations: [
    ItemComponent,
    ItemFormComponent,
    ItemListComponent,
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ItemPageModule { }
