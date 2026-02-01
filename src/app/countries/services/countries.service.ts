import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private baseUrl: string = "https://restcountries.com/v3.1";

  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []}
  }

  constructor(private httpClient: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {

    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]);
        }
        ),
        // delay(500)  Delay para tardar dos segundos al momento de regresar el arreglo de resultados
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

    return this.getCountriesRequest(url)
      .pipe(
        tap( (countries => this.cacheStore.byCapital = { term, countries }) )
      );
  }

  public searchCountry(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap( (countries => this.cacheStore.byCountries = {term, countries}) )
      );
  }

  public searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap( (countries => this.cacheStore.byRegion = {region, countries}) )
      );
  }

}
