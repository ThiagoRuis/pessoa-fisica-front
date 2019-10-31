import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { PessoaFisica } from './pessoa-fisica';
import { Telefone } from './telefone';
import { Endereco } from './endereco';

@Injectable({
  providedIn: 'root'
})
export class RuisApiService {
  constructor(private http: HttpClient) { }


  getListaPessoas() {
    return this.http.get(`${environment.api_url}/pessoa_fisica/pessoa/`);
  }

  
  
  getPessoa(id: string) {
    return this.http.get(`${environment.api_url}/pessoa_fisica/pessoa/${id}`);
  }

  salvaPessoa(data: PessoaFisica) {
    return this.http.post(`${environment.api_url}/pessoa_fisica/pessoa/`, data)
  }
  
  atualizaPessoa(data: PessoaFisica) {
    return this.http.put(`${environment.api_url}/pessoa_fisica/pessoa/${data.id}/`, data)
  }
  
  deletePessoa(id: string) {
    return this.http.delete(`${environment.api_url}/pessoa_fisica/pessoa/${id}`);
  }




  
  getTelefone(id: string) {
    return this.http.get(`${environment.api_url}/pessoa_fisica/telefone/${id}/`);
  }

  salvaTelefones(telefone: Telefone) {
    return this.http.post(`${environment.api_url}/pessoa_fisica/telefone/`, telefone)
  }
  
  atualizaTelefones(telefone: Telefone) {
    return this.http.put(`${environment.api_url}/pessoa_fisica/telefone/${telefone.id}/`, telefone)
  }

  deleteTelefone(id: string) {
    return this.http.delete(`${environment.api_url}/pessoa_fisica/telefone/${id}/`);
  }


  getEndereco(id: string) {
    return this.http.get(`${environment.api_url}/pessoa_fisica/endereco/${id}/`);
  }

  salvaEnderecos(endereco: Endereco) {
    return this.http.post(`${environment.api_url}/pessoa_fisica/endereco/`, endereco)
  }
  
  atualizaEnderecos(endereco: Endereco) {
    return this.http.put(`${environment.api_url}/pessoa_fisica/endereco//${endereco.id}/`, endereco)
  }

  deleteEndereco(id: string) {
    return this.http.delete(`${environment.api_url}/pessoa_fisica/endereco/${id}/`);
  }
}
