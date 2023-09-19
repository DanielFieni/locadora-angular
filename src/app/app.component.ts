import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'locadora';

  constructor(private location: Location) {
  }

  onCancel(){
    this.location.back();
  }
}
