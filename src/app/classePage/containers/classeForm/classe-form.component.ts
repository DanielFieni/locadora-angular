import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import { Location } from '@angular/common'
import { ClasseService} from "../../services/classe.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";

import { Classe } from "../../../models/classe";
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.css']
})
export class ClasseFormComponent implements OnInit{

  form= this.formBuilder.group({
    id: [''],
    nome: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)]],
    valor: ['', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(100)]],
    dataDevolucao: ['', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(100)]]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ClasseService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    public formUtils: FormUtilsService
  ) {
  }

  ngOnInit() {
    const classe: Classe = this.route.snapshot.data['classe'];
    this.form.setValue({
      id: classe.id,
      nome: classe.nome,
      valor: classe.valor,
      dataDevolucao: classe.dataDevolucao
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
    this.snackBar.open('Classe salva com sucesso', '', {duration: 5000});
    this.onCancel()
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Classe', '', {duration: 5000});
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
