import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  id: string;
  numero: any;
  edicao = false;
  telefoneForm = new FormGroup({
    numero: new FormControl(''),
    pessoa: new FormControl(''),
  });
  constructor(private api : RuisApiService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.listaPessoas();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.consultaNumero(this.id);
  }
  
  consultaNumero(id: string) {
    this.api.getTelefone(id).subscribe((data: any) => {
        this.numero = data;
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
    let dadosForm = this.telefoneForm.value;
  
    if(this.edicao) {
      dadosForm['id'] = this.numero.id;
      this.api.atualizaTelefones(dadosForm).subscribe(()=>{
        this.router.navigate(['/']);
      }, (error) => {
        this.msgErro = 'Ocorreu um erro no cadastro!';
        console.log(dadosForm);
      });
    } else {
      this.api.salvaTelefones(dadosForm).subscribe(()=>{
        this.router.navigate(['/']);
      }, (error) => {
        this.msgErro = 'Ocorreu um erro no cadastro!';
        console.log(dadosForm);
      });
    }
  }
}
