import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receita } from 'src/app/models/receita';
import { ReceitaService } from 'src/app/service/receitas/receita.service';

@Component({
  selector: 'app-relatorio-receita',
  templateUrl: './relatorio-receita.component.html',
  styleUrls: ['./relatorio-receita.component.scss']
})
export class RelatorioReceitaComponent implements OnInit {

  auxObject = {count: 100, data: []};
  listReceitas: Receita[];



  constructor(public receitaService: ReceitaService, private router: Router) { }

  ngOnInit(): void {
    this.populateReceitas();
  }

  populateReceitas(){
    for (let i = 0; i < this.auxObject.count; i++) {
      this.auxObject.data.push({
        id: i,
        data: '2' + '1' + '/' + '12' + '/' + '20' + i,
        valor: 'R$' + i + i + i + i,
        tipo: 'salario',
        descricao: 'COM ADICIONAL DE R$' + i,
        fixo: true
      });
      this.listReceitas = this.auxObject.data;
    }
    this.auxObject.data = [];
      
  }

  edit(receita: Receita){
    console.log(receita);
    this.receitaService.getReceitaFromScreen(receita);
    this.router.navigate(['/receitas-form']);
  }

}
