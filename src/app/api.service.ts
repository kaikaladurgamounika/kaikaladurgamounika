import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  api_host_local: string = "/api";
  api_host: string = "https://newsapi.org/v2";
  API_KEY = 'f95ace5918094f9681e86fb9696b224d';

  constructor(private httpclient: HttpClient) { 

  }
  public getNews(){
    const endpoint = '/top-headlines?sources=techcrunch&apiKey=' + this.API_KEY ;
    return this.httpclient.get(this.api_host + endpoint );
  }
  public getFriends(type:string){
    const API_KEY = 'f95ace5918094f9681e86fb9696b224d';
    //const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=';
    const endpoint = '/v1/friends/?format=' + type;
    return this.httpclient.get(this.api_host_local + endpoint );
  }
}

/*
{
  name:vinay,
  age:20,
  address :xyz,
  college: iit 
}
*/
