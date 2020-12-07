import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  post(path: string, body: any, requestHeaders?: any) {
    return this.httpClient.post(`${environment.endpoint.url}${path}`,  body, { headers: requestHeaders});
  }

  put(path: string, body: any, requestHeaders?: any) {
    return this.httpClient.put(`${environment.endpoint.url}${path}`, body, { headers: requestHeaders});
  }

  get(path: string, requestHeaders?:any, page?: number, qtd?: number) {
    return this.httpClient.get(`${environment.endpoint.url}${path}?page=${page}&qtd=${qtd}`,
     { headers: requestHeaders });
  }

  getById(id: number, path: string, requestHeaders?:any) {
    return this.httpClient.get(`${environment.endpoint.url}/${path}/${id}`, { headers: requestHeaders });
  }

  getByTag(path: string, tag: string, requestHeaders?:any, page?: number, qtd?: number) {
    return this.httpClient.get(`${environment.endpoint.url}${path}?blog=${tag}&pagina=${page}&quantidade=${qtd}`,
     { headers: requestHeaders });
  }
}
