import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RuisApiService } from '../ruis-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  msgErro: string;
  pessoaFisicaForm: FormGroup;

  constructor(private api : RuisApiService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() { 
    this.pessoaFisicaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      data_nascimento: ['', Validators.required],
      telefones: new FormArray([]),
      enderecos: new FormArray([]),
    });
  }
  
  salvaFormulario() {
    
    console.warn(this.pessoaFisicaForm.value);
    return;
    let dadosForm = this.pessoaFisicaForm.value;
    
    if(! this.validaCPF(dadosForm.cpf) || dadosForm.cpf.indexOf('-') > -1 || dadosForm.cpf.indexOf('.') > -1){
      this.msgErro = 'CPF Inválido!';
      return;
    }
    
    dadosForm.data_nascimento = this.converteObjetoData(dadosForm.data_nascimento); 
    console.warn(dadosForm.cpf);
    this.api.salvaPessoa(dadosForm).subscribe((dadosRetorno: any)=>{
      this.router.navigate(['/']);
    }, (error) => {
      this.msgErro = 'Ocorreu um erro no cadastro!';
      console.log(dadosForm);
    });
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
