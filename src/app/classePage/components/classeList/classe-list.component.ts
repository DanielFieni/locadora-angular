import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Classe} from "../../../models/classe";

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent implements OnInit{

  @Input() classes: Classe[] = [];
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['id', 'valor', 'dataDevolucao', 'acoes']

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true)
  }

  onEdit(classe: Classe){
    this.edit.emit(classe);
  }

  onDelete(classe: Classe){
    this.remove.emit(classe)
  }

}
