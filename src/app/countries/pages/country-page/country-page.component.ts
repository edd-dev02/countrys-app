import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
  ) { }

  // Manera limpia de hacerlo: Uso de RxJs

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}: Params) =>  this.countriesService.searchCountryByAlphaCode( id )),
      )
      .subscribe( country => {

        if(!country)  {
          return this.router.navigateByUrl("");
        }

        console.log("Tenemos país");
        return;

      })
  }


  /*

  Manera práctica de hacerlo

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }: Params) => {
        this.searchCountry( id );
      })
  }

  public searchCountry(code: string) {
    this.countriesService.searchCountryByAlphaCode(code)
      .subscribe(country => {
        console.log({ country });
      })
  }
  */


}
