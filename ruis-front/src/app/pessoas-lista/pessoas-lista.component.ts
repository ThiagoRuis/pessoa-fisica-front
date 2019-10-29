import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'data_nascimento', 'data_cadastro'];
  pessoasList =[
    {
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
    },
    {
      "id": 2,
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
  }
];

  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
