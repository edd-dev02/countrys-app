import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';

const routes: Routes = [
  {
    path: "by-capital",
    component: ByCapitalPageComponent
  },
  {
    path: "by-country",
    component: ByCountryPageComponent
  },
  {

  },
  {

  },
];


@NgModule({
  imports: [],
  exports: [],
})
export class CountriesRoutingModule { }
