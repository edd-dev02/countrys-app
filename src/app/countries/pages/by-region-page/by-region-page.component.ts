import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public placeholder: string = "Buscar por región"
  public countries: Country[] = []
  public isLoading: boolean = false;

  public regions: Region[] = ["Africa" , "Americas" , "Asia" , "Europe" , "Oceania"];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  searchByRegion(region: Region): void {

    this.selectedRegion = region;

    this.isLoading = true;
    this.countriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }

}
