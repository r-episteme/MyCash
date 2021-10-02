import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Despesa } from 'src/app/models/despesa';
import { DespesaService } from 'src/app/service/despesas/despesa.service';

@Component({
  selector: 'app-relatorio-despesa',
  templateUrl: './relatorio-despesa.component.html',
  styleUrls: ['./relatorio-despesa.component.scss']
})
export class RelatorioDespesaComponent implements OnInit {

  auxObject = {count: 100, data: []};
  listDespesas: Despesa[];



  constructor(public despesaService: DespesaService, private router: Router) { }

  ngOnInit(): void {
    this.populateDespesas();
  }

  populateDespesas(){
    for (let i = 0; i < this.auxObject.count; i++) {
      this.auxObject.data.push({
        id: i,
        data: '2' + '1' + '/' + '12' + '/' + '20' + i,
        valor: 'R$' + i + i + i + i,
        tipo: 'debito',
        descricao: 'COM ADICIONAL DE R$' + i,
        fixo: true
      });
      this.listDespesas = this.auxObject.data;
    }
    this.auxObject.data = [];
      
  }

  edit(despesa: Despesa){
    console.log(despesa);
    this.despesaService.getDespesaFromScreen(despesa);
    this.router.navigate(['/despesas-form']);
  }

}