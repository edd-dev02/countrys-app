import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private baseUrl: string = "https://restcountries.com/v3.1";

  constructor(private httpClient: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {

    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]);
        }
        )
      );

  }

  public searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.baseUrl}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))

      )
  }

  public searchCapital(term: string): Observable<Country[]> {

    const url = `${this.baseUrl}/capital/${term}`;

    return this.getCountriesRequest(url);
  }

  public searchCountry(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${term}`;

    return this.getCountriesRequest(url);
  }

  public searchRegion(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${term}`;

    return this.getCountriesRequest(url);
  }

}
