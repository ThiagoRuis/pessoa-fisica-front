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

  salvaTelefones(idPessoa: number, telefones: Telefone[]) {
    return null;
  }

  salvaEnderecos(idPessoa: number, enderecos : Endereco[]) {
    return null;
  }
}
