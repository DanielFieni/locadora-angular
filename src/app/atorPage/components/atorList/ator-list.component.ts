import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ator} from "../../../models/ator";

@Component({
  selector: 'app-ator-list',
  templateUrl: './ator-list.component.html',
  styleUrls: ['./ator-list.component.css']
})
export class AtorListComponent implements OnInit{

  @Input() atores: Ator[] = [];
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

  onEdit(ator: Ator){
    this.edit.emit(ator);
  }

  onDelete(ator: Ator){
    this.remove.emit(ator)
  }

}
