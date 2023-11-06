import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{

  @Input() itens: Item[] = [];
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['id', 'numSerie', 'dtAquisicao', 'tipoItem', 'titulo', 'acoes']

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true)
  }

  onEdit(item: Item){
    this.edit.emit(item);
  }

  onDelete(item: Item){
    this.remove.emit(item)
  }

}
