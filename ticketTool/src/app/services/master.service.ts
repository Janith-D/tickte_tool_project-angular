import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl :string ="/api/TicketsNew/";

  constructor(private http: HttpClient) { }

  login(obj :any){
    return this.http.post(this.apiUrl+'Login',obj);
  }
  getAllDept(){
    return this.http.get(`${this.apiUrl}GetDepartments`);
  }
  createDept(obj:any){
    return this.http.post(`${this.apiUrl}CreateDepartment`,obj);
  }
  updateDept(obj:any){
    return this.http.put(`${this.apiUrl}UpdateDepartment`,obj);
  }
  deleteDept(id:number){
    return this.http.delete(`${this.apiUrl}DeleteDepartment?id=${id}`);
  }
  getPCategory(){
    return this.http.get(`${this.apiUrl}GetParentCategory`);
  }
  createPCategory(obj:any){
    return this.http.post(`${this.apiUrl}CreateParentCategory`,obj);
  }
  updatePCategory(obj:any){
    return this.http.put(`${this.apiUrl}UpdateParentCategory`,obj);
  }
  deletePCategory(id:number){
    return this.http.delete(`${this.apiUrl}DeleteParentCategory?id=${id}`);
  }
  getCCategory(){
    return this.http.get(`${this.apiUrl}GetChildCategory`)
  }
  createCCategory(obj:any){
    return this.http.post(`${this.apiUrl}CreateChildCategory`,obj);
  }
  updateCCategory(obj:any){
    return this.http.put(`${this.apiUrl}UpdateChildCategory`,obj);
  }
  deleteCCategory(id:number){
    return this.http.delete(`${this.apiUrl}DeleteChildCategory?id=${id}`);
  }
}
