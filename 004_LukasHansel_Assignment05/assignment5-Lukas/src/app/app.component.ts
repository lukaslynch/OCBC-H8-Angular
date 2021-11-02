import { Component } from '@angular/core';
import { Country } from './models/Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Country App';

  tampilan: number = 0;

  countryToSend:Country = {} as Country

  countriesByArea: Country[] =[]
  countriesByPopulation: Country[] = []

  countries:Country[]=[
    {
      country: 'United States',
      capital: 'Washington, D.C',
      area: 9525067,
      population: 325365189,
      gdp: 18569100,
      currency: 'United States Dollar'
    },
    {
      country: 'China',
      capital: 'Beijing',
      area: 9596961,
      population: 1403500365,
      gdp: 10569100,
      currency: 'RMB Yuan'
    },
    {
      country: 'Japan',
      capital: 'Tokyo',
      area: 9525067,
      population: 59250120,
      gdp: 10569100,
      currency: 'JPY Yen'
    },
    {
      country: 'Rusia',
      capital: 'Moscow',
      area: 17098246,
      population: 144463451,
      gdp: 10569100,
      currency: 'Rubel Rusia',
    },
    {
      country: 'Canada',
      capital: 'Ottawa',
      area: 9984670,
      population: 27500620,
      gdp: 10569100,
      currency: 'Canadian $'
    }
  ]

  ngOnInit() {
    this.countriesByArea = [...this.countries];
    this.countriesByPopulation = [...this.countries];
    this.countriesByArea.sort((a,b) => (a.area > b.area) ? -1 : ((b.area > a.area) ? 1 : 0))
    this.countriesByPopulation.sort((a,b) => (a.population > b.population) ? -1 : ((b.population > a.population) ? 1 : 0))
    this.countriesByPopulation = this.countriesByPopulation.slice(0, 3);
    this.countriesByArea = this.countriesByArea.slice(0, 3);
  }
  

  gotoCountryDetail(countryName:string){
    console.log(countryName)
    this.tampilan=2;
    this.countryToSend = this.countries.find(({country}) => country === countryName)!;
  }
}
