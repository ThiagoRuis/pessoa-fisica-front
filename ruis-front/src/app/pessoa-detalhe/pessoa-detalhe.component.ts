import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.css']
})
export class PessoaDetalheComponent implements OnInit {
  pessoa = {
      "id": 1,
      "nome": "Pessoa teste",
      "cpf": "11111111111",
      "email": "email@email.com",
      "data_nascimento": "2019-10-28",
      "data_cadastro": "2019-10-29",
      "enderecos": [
          {
              "id": 1,
              "pessoa": 1,
              "logradouro": "Rua dos bobos, 0",
              "cep": "00000-000",
              "bairro": "Reduto bobo",
              "cidade": "Bobolandia",
              "uf": "NA"
          }
      ],
      "telefones": [
          {
              "id": 12,
              "numero": "11 2222 4444",
              "pessoa": 1
          }
      ]
  };
  displayedColumnsTelefone: string[] = ['numero'];
  displayedColumnsEndereco: string[] = ['logradouro', 'cep', 'bairro', 'cidade', 'uf'];
  
  constructor() { }

  ngOnInit() {
  }

}
