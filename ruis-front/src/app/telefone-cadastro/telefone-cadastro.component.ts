import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RuisApiService } from '../ruis-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telefone-cadastro',
  templateUrl: './telefone-cadastro.component.html',
  styleUrls: ['./telefone-cadastro.component.css']
})
export class TelefoneCadastroComponent implements OnInit {
  msgErro: string;
  pessoasList: [];
  telefoneForm = new FormGroup({
    numero: new FormControl(''),
    pessoa: new FormControl(''),
  });
  constructor(private api : RuisApiService, private router: Router) { }

  ngOnInit() {
    this.listaPessoas();
  }

  listaPessoas() {
    this.api.getListaPessoas().subscribe((data: any)=> {
      console.log(data);
      this.pessoasList = data;
    });
  }

  salvaFormulario() {
    let dadosForm = this.telefoneForm.value;
  
    console.warn(dadosForm);
    
    // this.api.salvaEnderecos([dadosForm]).subscribe(()=>{
    //   this.router.navigate(['/']);
    // }, (error) => {
    //   this.msgErro = 'Ocorreu um erro no cadastro!';
    //   console.log(dadosForm);
    // });
  }
}
