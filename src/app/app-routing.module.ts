import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RelatorioReceitaComponent } from './receita/relatorio-receita/relatorio-receita.component';
import { CadastrarUsuarioComponent } from './formulario/cadastrar-usuario/cadastrar-usuario.component';
import { RecuperarSenhaComponent } from './formulario/recuperar-senha/recuperar-senha.component';
import { RelatorioDespesaComponent } from './despesa/relatorio-despesa/relatorio-despesa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './service/auth.guard';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';
import { ReceitaComponent } from './formulario/receita/receita.component';
import { DespesaComponent } from './formulario/despesa/despesa.component';

const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
{path: 'relatorio-despesa', component: RelatorioDespesaComponent, canActivate: [AuthGuard]},
{path: 'relatorio-receita', component: RelatorioReceitaComponent, canActivate: [AuthGuard]},
{path: 'cadastrar-usuario', component: CadastrarUsuarioComponent},
{path: 'recuperar-senha', component: RecuperarSenhaComponent},
{path: 'receitas-form', component: ReceitaComponent, canActivate: [AuthGuard]},
{path: 'despesas-form', component: DespesaComponent, canActivate: [AuthGuard]},
{path: '**', component: NotFoundComponent}
];

@NgModule({
    declarations: [],
    imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
