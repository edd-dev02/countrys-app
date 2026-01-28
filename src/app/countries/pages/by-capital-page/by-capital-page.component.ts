import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
    `img {
      width: 25px;
    }
    `
  ]
})
export class ByCapitalPageComponent {

  public placeholder: string = "Buscar por capital"
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  public searchByCapital(term: string): void {

    this.isLoading = true;

    this.countriesService.searchCapital(term).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;

    } )
  }

}
