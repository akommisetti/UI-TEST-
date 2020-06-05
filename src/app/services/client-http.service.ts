import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {

  constructor(private http: HttpClient) { }

  getCountries(val):Observable<any> {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${val}`);
  }
}
