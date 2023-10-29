import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Titulo} from "../../../models/titulo";

@Component({
  selector: 'app-titulo-list',
  templateUrl: './titulo-list.component.html',
  styleUrls: ['./titulo-list.component.css']
})
export class TituloListComponent implements OnInit{

  @Input() titulos: Titulo[] = [];
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['id', 'nome', 'ano', 'sinopse', 'categoria', 'acoes']

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true)
  }

  onEdit(titulo: Titulo){
    this.edit.emit(titulo);
  }

  onDelete(titulo: Titulo){
    this.remove.emit(titulo)
  }

}
