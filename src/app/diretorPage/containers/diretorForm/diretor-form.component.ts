import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import { Location } from '@angular/common'
import { DiretorService } from "../../services/diretor.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { Diretor } from "../../../models/diretor";
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';

@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent implements OnInit{

  form= this.formBuilder.group({
    id: [''],
    nome: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)]]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: DiretorService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    public formUtils: FormUtilsService
  ) {
  }

  ngOnInit() {
    const diretor: Diretor = this.route.snapshot.data['diretor'];
    this.form.setValue({
      id: diretor.id,
      nome: diretor.nome
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
    this.snackBar.open('Diretor salvo com sucesso', '', {duration: 5000});
    this.onCancel()
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Diretor', '', {duration: 5000});
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
