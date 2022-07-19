import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE } from 'src/environments/environment';
import { apiRequest } from '../contants'

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private httpHeaders = {
    'Authorization': '',
    //'Content-Type': 'application/json', 
    //'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Headers': 'content-type, authorization, accept',
    'Access-Control-Allow-Methods': '',
    'access-token': ''
  };
  
  constructor(
    private http: HttpClient
    ) { }
    
    public get(url: string): Observable<object>{
      this.httpHeaders['Access-Control-Allow-Methods'] = 'GET';
      return this.http.get(url)
    }
  
    public post(url: string, object: any): Observable<object> {
      this.httpHeaders['Access-Control-Allow-Methods'] = 'POST';
      return this.http.post(url, object, { headers: new HttpHeaders(this.httpHeaders) });

    }
  
    public delete(url: string): Observable<object> {
      this.httpHeaders['Access-Control-Allow-Methods'] = 'GET';
      return this.http.get(url, { headers: new HttpHeaders(this.httpHeaders) });
    }
}
