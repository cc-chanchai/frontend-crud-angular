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
  };

  get(id: number): Observable<object>{
    return this.http.get(`${baseUrl}/${id}`);
  };

  create(data: object): Observable<object>{
    return this.http.post(baseUrl, data);
  };

  update(id: number, data: object): Observable<object> {
    return this.http.put(`${baseUrl}/${id}`, data);
  };

  delete(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  };

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  };

  findByTitle(title: String): Observable<object>{
    return this.http.get(`${baseUrl}?title=${title}`);
  };
};
