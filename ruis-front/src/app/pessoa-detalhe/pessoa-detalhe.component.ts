import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuisApiService } from '../ruis-api.service';
import { PessoaFisica } from '../pessoa-fisica'

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.css']
})
export class PessoaDetalheComponent implements OnInit {
  private id: string;
  private pessoa = PessoaFisica;
  displayedColumnsTelefone: string[] = ['numero'];
  displayedColumnsEndereco: string[] = ['logradouro', 'cep', 'bairro', 'cidade', 'uf'];
  
  constructor(private api: RuisApiService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.consultaPessoa(this.id);
  }

  consultaPessoa(id: string) {
    this.api.getPessoa(id).subscribe((data: any) => {
        console.log('>>>>>>>>>>>>');
        console.log(data);
        console.log('>>>>>>>>>>>>');
        this.pessoa = data;
    });
  }

}
