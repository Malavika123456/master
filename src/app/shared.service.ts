import { Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:50124/api";

  constructor(private http:HttpClient) {}

  getItemList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/item');
  }

  addItem(val:any){
    return this.http.post(this.APIUrl+'/item',val);
  }

  updateItem(val:any){
    return this.http.put(this.APIUrl+'/item',val);
  }

  deleteItem(val:any){
    return this.http.delete(this.APIUrl+'/item/'+val);
  }
}
