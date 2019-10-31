import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RuisApiService } from '../ruis-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco-cadastro',
  templateUrl: './endereco-cadastro.component.html',
  styleUrls: ['./endereco-cadastro.component.css']
})
export class EnderecoCadastroComponent implements OnInit {
  msgErro: string;
  enderecoForm = new FormGroup({
    logradouro: new FormControl(''),
    cep: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    uf: new FormControl(''),
  });

  constructor(private api : RuisApiService, private router: Router) { }

  ngOnInit() { }

  salvaFormulario() {
    let dadosForm = this.enderecoForm.value;
  
    console.warn(dadosForm);
    
    // this.api.salvaEnderecos([dadosForm]).subscribe(()=>{
    //   this.router.navigate(['/']);
    // }, (error) => {
    //   this.msgErro = 'Ocorreu um erro no cadastro!';
    //   console.log(dadosForm);
    // });
  }
}