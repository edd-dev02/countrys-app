import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [`
      .flag {
      width: 40px;
      border-radius: 4px;
    }
    `]
})
export class CountryTableComponent {

  @Input("InputCountries")
  public countries: Country[] = [];

}
