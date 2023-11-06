import {Component, OnInit} from '@angular/core';
import { ItemService } from "../../services/item.service";
import {catchError, config, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../../shared/components/error-dialog/error-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

import {
  ConfirmationDialogComponent
} from "../../../shared/components/confirmation-dialog/confirmation-dialog.component";
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponent implements OnInit {

  itens$: Observable<Item[]> | null = null;

  constructor(
    private itemService: ItemService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) {
    this.refresh();
  }

  refresh(){
  
    this.itens$ = this.itemService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar itens!')
          return of([])
        })
      )
      
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit() {

  }

  onAdd(){
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

  onEdit(item: Item){
    this.router.navigate(['editar' , item.id], { relativeTo: this.route });
  }

  onRemove(item: Item){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover essa Item?'
    })

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result){
        this.itemService.remove(item.id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Item removido com sucesso.', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover Item.')
        )
      }
    })
  }




}
