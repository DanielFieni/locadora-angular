import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Diretor} from "../../../models/diretor";

@Component({
  selector: 'app-diretor-list',
  templateUrl: './diretor-list.component.html',
  styleUrls: ['./diretor-list.component.css']
})
export class DiretorListComponent implements OnInit{

  @Input() diretores: Diretor[] = [];
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['id', 'nome', 'acoes']

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true)
  }

  onEdit(diretor: Diretor){
    this.edit.emit(diretor);
  }

  onDelete(diretor: Diretor){
    this.remove.emit(diretor)
  }

}
