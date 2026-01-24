import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private baseUrl: string = "https://restcountries.com/v3.1";

  constructor(private httpClient: HttpClient) { }

  public searchCapital( term: string ): Observable<Country[]> {

    const url = `${this.baseUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>( url )

  }

}
