import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl :string ="https://freeapi.miniprojectideas.com/api/TicketsNew/";

  constructor(private http: HttpClient) { }

  login(obj :any){
    return this.http.post(this.apiUrl+'Login',obj);
  }
}
