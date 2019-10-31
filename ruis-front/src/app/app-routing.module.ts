import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoaCadastroComponent} from './pessoa-cadastro/pessoa-cadastro.component';
import { TelefoneCadastroComponent } from './telefone-cadastro/telefone-cadastro.component';
import { EnderecoCadastroComponent } from './endereco-cadastro/endereco-cadastro.component';

const routes: Routes = [
  { path: '', component: PessoasListaComponent },
  { path: 'detalhe/:id', component: PessoaDetalheComponent },
  { path: 'cadastro-pessoa', component: PessoaCadastroComponent },
  { path: 'cadastro-pessoa/:id', component: PessoaCadastroComponent },
  { path: 'cadastro-endereco', component: EnderecoCadastroComponent},
  { path: 'cadastro-endereco/:id', component: EnderecoCadastroComponent},
  { path: 'cadastro-telefone', component: TelefoneCadastroComponent},
  { path: 'cadastro-telefone/:id', component: TelefoneCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
