import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concat } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/tutorials'

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<object>{
    return this.http.get(baseUrl);
  }
  get(id: number): Observable<object>{
    return this.http.get(`${baseUrl}/${id}`);
  }
}
