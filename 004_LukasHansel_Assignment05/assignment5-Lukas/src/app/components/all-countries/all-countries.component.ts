import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  @Input() countries:Country[] = []
  @Output() clickEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(countryName:string){
    this.clickEvent.emit(countryName)
  }

}
