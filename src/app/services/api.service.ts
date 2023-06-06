import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depoimentos, Promocoes } from 'src/app/interfaces/types';

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
    return this.http.get<Depoimentos[]>(this.api_url + 'depoimentos')
  }
}
