import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  protected get<T=any>(url:string): Observable<T>
  {
    return this.http.get<T>(url);
  }
}
