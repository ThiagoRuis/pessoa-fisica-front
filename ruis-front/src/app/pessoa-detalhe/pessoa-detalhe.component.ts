import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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
  displayedColumnsTelefone: string[] = ['numero', 'acoes'];
  displayedColumnsEndereco: string[] = ['logradouro', 'cep', 'bairro', 'cidade', 'uf', 'acoes'];
  
  constructor(private api: RuisApiService, private activatedRoute : ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.consultaPessoa(this.id);
  }

  consultaPessoa(id: string) {
    this.api.getPessoa(id).subscribe((data: any) => {
        this.pessoa = data;
    });
  }

  editarTelefone(id: string) {
    this.router.navigate(['/cadastro-telefone/'+ id]);
  }
  
  deletarTelefone(id: string) {
    this.api.deleteTelefone(id).subscribe((data: any) => {
      this.api.getPessoa(this.id).subscribe((data: any) => {
        this.pessoa = data;
      });
    });
  }
  editarEndereco(id: string) {
    this.router.navigate(['/cadastro-endereco/'+ id]);
  }
  deletarEndereco(id: string) {
    this.api.deleteEndereco(id).subscribe((data: any) => {
      this.api.getPessoa(this.id).subscribe((data: any) => {
        this.pessoa = data;
      });
    });

  }

}
