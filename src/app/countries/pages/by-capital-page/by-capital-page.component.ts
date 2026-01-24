import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public placeholder: string = "Buscar por capital"

  constructor(countriesService: CountriesService) {}

  public searchByCapital(term: string): void {
    console.log("Desde by-capital page");
    console.log({term});
  }

}
