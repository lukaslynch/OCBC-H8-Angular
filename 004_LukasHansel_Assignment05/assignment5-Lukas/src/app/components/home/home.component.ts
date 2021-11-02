import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() countriesByArea:Country[] = []
  @Input() countriesByPopulation:Country[] = []

  @Output() clickEvent = new EventEmitter<string>()
  
  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(countryName:string){
    this.clickEvent.emit(countryName)
  }

}
