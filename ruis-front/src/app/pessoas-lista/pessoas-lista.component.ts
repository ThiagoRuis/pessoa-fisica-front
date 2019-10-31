import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RuisApiService } from '../ruis-api.service';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'data_nascimento', 'data_cadastro'];
  pessoasList = [];

  panelOpenState = false;
  constructor(private router: Router, private api: RuisApiService) { }

  ngOnInit() {
    this.listaPessoas();
  }

  listaPessoas() {
    this.api.getListaPessoas().subscribe((data: any)=> {
      console.log('>>>>>>>>>>>>>>>');
      console.log(data);
      console.log('>>>>>>>>>>>>>>>');
      this.pessoasList = data;
    });
  }

  abreDetalhe(row: any) {
    this.router.navigate(['/detalhe/'+row.id]);
  } 

}
