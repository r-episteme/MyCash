import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
  })
  
export class RecuperarSenhaComponent implements OnInit {
  
  RecuperarSenhaForm = new FormGroup({
    NovaSenha: new FormControl('', [Validators.required, Validators.email]),
    ConfirmarSenha: new FormControl('', [Validators.required])
  });


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToLogin(){
    this.router.navigate(['/login']);
  }

  RecuperarSenha(){
      if (this.RecuperarSenhaForm.valid) {
        localStorage.setItem('token', 'senhateste');
        this.router.navigate(['/login'])
      }
  }


}
