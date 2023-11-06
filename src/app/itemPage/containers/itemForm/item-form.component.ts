import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Location } from '@angular/common'
import { ItemService } from "../../services/item.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";

import { Titulo } from "../../../models/titulo";
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';
import { TituloService } from 'src/app/tituloPage/services/titulo.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit{
  tituloData: Titulo[] = [];

  form!: FormGroup;

  item: Item = {} as Item

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ItemService,
    private tituloService: TituloService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    public formUtils: FormUtilsService
  ) {
  }


  ngOnInit() {
    this.item = this.route.snapshot.data['item'];

    this.preencherTitulo();

    this.form = this.formBuilder.group({
      id: [''],
      numSerie: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)]],
      dtAquisicao: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)]],
      tipoItem: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)]],
      titulo: new FormControl(''),
  
    });

    if(this.item) this.form.patchValue(this.item);

    console.log(this.form.value);

  }

  private preencherTitulo() {
    this.tituloService.list().subscribe({
      next: (titulo: Titulo[]) => {
        this.tituloData.push(...titulo)
        let value: Titulo = {} as Titulo
        this.tituloData.forEach(titulo => {
          const add = this.item.titulo = titulo;
          if (add) value = add;
        })
        this.form.controls['titulo'].setValue(value)
      },
    })
  }

  onSubmit(){
      if (this.form.valid) {
        this.service.save(this.form.value)
          .subscribe(result => this.onSuccess(), error => this.onError());
      } else {
        this.formUtils.validateAllFormFields(this.form);
      }
    }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Item salvo com sucesso', '', {duration: 5000});
    this.onCancel()
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Item', '', {duration: 5000});
  }

  getErrorMessage(fieldName: string){
    const field = this.form.get(fieldName);

    if (field?.hasError('required')){
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')){
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 3;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres`;
    }

    if (field?.hasError('maxlength')){
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 100;
      return `Tamanho maximo excedido de ${requiredLength} caracteres`;
    }

    return 'Campo inválido';
  }

}
