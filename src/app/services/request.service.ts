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
}
