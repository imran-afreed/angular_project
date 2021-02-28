import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdatService {
  constructor(private http: HttpClient) { }
  getdata(){
    return this.http.get('https://myladder.app/api/assignment/tech'); 
  }
}
