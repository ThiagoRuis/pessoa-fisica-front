import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RuisApiService } from '../ruis-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  msgErro: string;
  id: string;
  pessoa: any;
  edicao = false;
  pessoaFisicaForm = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    email: new FormControl(''),
    data_nascimento: new FormControl(''),
  });

  constructor(private api : RuisApiService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.consultaPessoa(this.id);
  }

  consultaPessoa(id: string) {
    this.api.getPessoa(id).subscribe((data: any) => {
        console.log(data);
        this.pessoa = data;
        this.edicao = true;
    });
  }
  
  salvaFormulario() {
    let dadosForm = this.pessoaFisicaForm.value;
    
    if(! this.validaCPF(dadosForm.cpf) || dadosForm.cpf.indexOf('-') > -1 || dadosForm.cpf.indexOf('.') > -1){
      this.msgErro = 'CPF Inválido!';
      return;
    }
  
    dadosForm.data_nascimento = this.converteObjetoData(dadosForm.data_nascimento); 
    
    if(this.edicao) {
      console.warn(dadosForm);
      dadosForm['id'] = this.pessoa.id;
      this.api.atualizaPessoa(dadosForm).subscribe(()=>{
        this.router.navigate(['/']);
      }, (error) => {
        this.msgErro = 'Ocorreu um erro no cadastro!';
        console.log(dadosForm);
      });
    } else {
      this.api.salvaPessoa(dadosForm).subscribe(()=>{
        this.router.navigate(['/']);
      }, (error) => {
        this.msgErro = 'Ocorreu um erro no cadastro!';
        console.log(dadosForm);
      });
    }
  }

  converteObjetoData(data: any) {
    return data.getFullYear() + '-' + (data.getMonth() +1) + '-' + data.getDate();
  }

  validaCPF(cpf: string) {
    let soma : number;
    let resto: number;
    soma = 0;

    if (cpf == "00000000000") return false;
     
    for (let i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
   
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(cpf.substring(9, 10)) ) return false;
   
    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
   
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
  }

}
