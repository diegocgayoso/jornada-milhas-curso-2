import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Depoimentos, Estado, Promocoes, Resultado } from 'src/app/interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url = 'http://localhost:8080/'
  constructor(
    private http: HttpClient
  ) { }

  getPromocoes() : Observable<Promocoes[]>{
    return this.http.get<Promocoes[]>(this.api_url + 'promocoes');
  }

  getDepoimentos() : Observable<Depoimentos[]>{
    return this.http.get<Depoimentos[]>(this.api_url + 'depoimentos');
  }

  buscarEstados() : Observable<Estado[]>{
    return this.http.get<Estado[]>(this.api_url + 'estados');
  }

  buscarPassagens(search: {}) {
    return this.http.get<Resultado>(this.api_url + 'passagem/search', {params: search})
  }
}
