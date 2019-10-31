import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RuisApiService } from '../ruis-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco-cadastro',
  templateUrl: './endereco-cadastro.component.html',
  styleUrls: ['./endereco-cadastro.component.css']
})
export class EnderecoCadastroComponent implements OnInit {
  msgErro: string;
  pessoasList: [];
  id: string;
  endereco: any;
  edicao = false;
  enderecoForm = new FormGroup({
    logradouro: new FormControl(''),
    cep: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    uf: new FormControl(''),
    pessoa: new FormControl(''),
  });

  constructor(private api : RuisApiService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.listaPessoas();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.consultaEndereco(this.id);
  }
  
  consultaEndereco(id: string) {
    this.api.getEndereco(id).subscribe((data: any) => {
        this.endereco = data;
        this.edicao = true;
    });
  }

  listaPessoas() {
    this.api.getListaPessoas().subscribe((data: any)=> {
      console.log(data);
      this.pessoasList = data;
    });
  }

  salvaFormulario() {
    let dadosForm = this.enderecoForm.value;
  
    if(this.edicao) {
      dadosForm['id'] = this.endereco.id;
      this.api.atualizaEnderecos(dadosForm).subscribe(()=>{
        this.router.navigate(['/']);
      }, (error) => {
        this.msgErro = 'Ocorreu um erro no cadastro!';
        console.log(dadosForm);
      });
    } else {
      this.api.salvaEnderecos(dadosForm).subscribe(()=>{
        this.router.navigate(['/']);
      }, (error) => {
        this.msgErro = 'Ocorreu um erro no cadastro!';
        console.log(dadosForm);
      });
    }
  }
}
