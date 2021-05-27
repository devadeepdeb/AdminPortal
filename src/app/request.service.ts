import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class RequestService {

  constructor (private http:Http){}

  getRequestList() {
    let url = "http://localhost:7070/api/request/all";
    return this.http.get(url, { withCredentials: true });
  }

  confirmRequest(id: number) {
    let url = "http://localhost:7070/api/request/"+id+"/confirm";
    return this.http.get(url, { withCredentials: true });
  }

}
