import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ArticlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticlesProvider {
  apiUrl:string;

  constructor(public http: HttpClient) {
    this.apiUrl  = "http://localhost:3000/api/v1/api/";
  }

  getArticles(){
    return this.http.get(this.apiUrl);
  }

}
