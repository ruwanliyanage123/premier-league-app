import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastbatService {

  private url = 'http://localhost:8080/api/scorecard/second'

  constructor(private http: HttpClient) {}

  getLastBattingResult():Observable<any>{
      return this.http.get<any>(this.url);
  }
}
