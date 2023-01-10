import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public generateToken(request:any){

    return this.http.post("http://localhost:9192/authenticate",request);
  }

  public welcome(token:any){
    let tokenStr='Bearer ' +token;
    const headers=new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:9192/",{headers,responseType: 'text' as 'json'});
  }

}
