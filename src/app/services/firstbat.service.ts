import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstbatService {

  private apiUrl = 'http://localhost:8080/api/scorecard/first';

  constructor(private http: HttpClient) { }

  getSummary(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
