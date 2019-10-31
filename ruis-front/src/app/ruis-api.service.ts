import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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
}
