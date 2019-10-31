import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RuisApiService } from '../ruis-api.service';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'data_nascimento', 'data_cadastro', 'acoes'];
  pessoasList = [];

  panelOpenState = false;
  constructor(private router: Router, private api: RuisApiService) { }

  ngOnInit() {
    this.listaPessoas();
  }

  listaPessoas() {
    this.api.getListaPessoas().subscribe((data: any)=> {
      console.log(data);
      this.pessoasList = data;
    });
  }

  abreDetalhe(id) {
    this.router.navigate(['/detalhe/'+ id]);
  } 

  abreEdicao(id) {
    this.router.navigate(['/cadastro-pessoa/'+ id]);
  }

  deleta(id) {
    this.api.deletePessoa(id).subscribe((data: any)=> {
      this.api.getListaPessoas().subscribe((data: any)=> {
        this.pessoasList = data;
      });
    });
  }

}
