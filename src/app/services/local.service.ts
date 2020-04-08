import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get('/assets/events.json');
  }

  getResources(): Observable<any> {
    return this.http.get('/assets/resources.json');
  }

}
