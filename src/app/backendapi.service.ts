import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  readonly rootUrl : string;

  constructor(private http : HttpClient) { 

    this.rootUrl = 'http://localhost:8081/test-1/';
  }

  createUser(body) {
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.rootUrl+'api/createUser',body,{headers : reqHeader});
  }

  createPhoneNumber(body) {
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.rootUrl+'api/createPhoneNumber',body,{headers : reqHeader});
  }

  getUser() {
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.rootUrl+'api/getUser',{headers:reqHeader});    
  }

  getUserinfoById(id) {
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.rootUrl+'api/getUserById/'+id,{headers:reqHeader});    
  }

  getPhones() {
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.rootUrl+'api/getPhones',{headers:reqHeader});    
  }

  linkPhoneToUser(body) {
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.rootUrl+'api/linkPhoneToUser',body,{headers : reqHeader});
  }

  getPhonesLinktouser(id) {
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.rootUrl+'api/getPhonesLinktouser/'+id,{headers:reqHeader});    

  }

}
