import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() allCountriesEmit = new EventEmitter()
  @Output() homePageEmit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  emitAllCountriesEmit(){
    this.allCountriesEmit.emit()
  }

  emitHomePageEmit(){
    this.homePageEmit.emit()
  }

}
