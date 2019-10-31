import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoaCadastroComponent} from './pessoa-cadastro/pessoa-cadastro.component';

const routes: Routes = [
  { path: '', component: PessoasListaComponent },
  { path: 'detalhe/:id', component: PessoaDetalheComponent },
  { path: 'cadastro', component: PessoaCadastroComponent },
  { path: 'cadastro/:id', component: PessoaCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
