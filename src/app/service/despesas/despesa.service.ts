import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Despesa } from 'src/app/models/despesa';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  private edit = new BehaviorSubject<Despesa>(null);
  botaoEdit = this.edit.asObservable();

  constructor() { }

  getDespesaFromScreen(despesa: Despesa){
    this.edit.next(despesa);
  }
}