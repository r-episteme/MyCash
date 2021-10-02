import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DespesaService } from 'src/app/service/despesas/despesa.service';
import Swal from 'sweetalert2';
interface Tipo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss']
})
export class DespesaComponent implements OnInit {
  listTiposDespesa: Tipo[] = [
    {value: '0', viewValue: 'Saúde'},
    {value: '1', viewValue: 'Transporte'},
    {value: '2', viewValue: 'Educação'},
    {value: '3', viewValue: 'Lazer'},
    {value: '4', viewValue: 'Trabalho'},
    {value: '5', viewValue: 'Alimento'},
    {value: '6', viewValue: 'Domicílio'},
    {value: '7', viewValue: 'Emprestimo'},
    {value: '8', viewValue: 'Outro'},
  ];
  startDate = new Date(1990, 0, 1);
  formDespesa = new FormGroup({
    data: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    fixo: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, public despesaService: DespesaService) { }

  ngOnInit(): void {

    this.despesaService.botaoEdit.subscribe( edit=> {
      console.log(edit);
      if (edit){
        this.formDespesa.get('data').setValue(edit.data);
        this.formDespesa.get('valor').setValue(edit.valor);
        this.formDespesa.get('tipo').setValue(edit.tipo);
        this.formDespesa.get('descricao').setValue(edit.descricao);
        this.formDespesa.get('fixo').setValue(edit.fixo);
      }
    });
  }

  salvar(){
  if(this.formDespesa.valid){
    Swal.fire({
      icon: 'success',
      title: 'Opa!',
      text: 'Despesa salva com sucesso'
  });
  this.router.navigate(['/dashboard']);
}else{
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Preencha corretamente todos os campos'
  });
  }
 }
}