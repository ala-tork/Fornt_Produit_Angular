import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelProduit } from './Model/model-produit';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/api/';
  products:any;
  //initialase BehaviorSubject to follow the change of the search 
  searchBarTouchedSubject = new BehaviorSubject<String>("");
  //convet the value to observable to allow other parte to know if the value change
  searchBarTouched$ = this.searchBarTouchedSubject.asObservable();

  searchInput!: string;

  getProduit(): Observable<ModelProduit[]> {
    return this.http.get<ModelProduit[]>(this.url + 'GetProduct');
  }

  createProduct(prod: ModelProduit): Observable<any> {
    return this.http.post(this.url + 'AddProduct', prod);
  }
    //delete Product
    delete(id:any):Observable<any>{
      return this.http.delete(this.url+"id/"+id);
    }
  
    getProductById(id:any):Observable<ModelProduit>{
      return this.http.get<ModelProduit>(this.url+"id/"+id);
    }
    
    update(id:any,hero:any){
      return this.http.put(this.url+"id/"+id,hero);
    }
    searchByName(ProductName: string): Observable<ModelProduit[]> {
      return this.http.get<ModelProduit[]>(`${this.url}search/${ProductName}`);
    }
}
