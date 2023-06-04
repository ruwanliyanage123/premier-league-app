import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchSummaryService {

  private url = 'http://localhost:8080/api/summary/result';

  constructor(private http: HttpClient) { }

  getMatchSummary() :Observable<any>{
     return this.http.get<any>(this.url);
  }
}
