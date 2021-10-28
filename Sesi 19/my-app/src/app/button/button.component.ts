import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() name = ''; 

  @Output() clickEventHandler = new EventEmitter();

  constructor() { }

  // buat 1 function untuk menghandle eventnya
  onButtonClick(){
    this.clickEventHandler.emit()
  }
  

  ngOnInit(): void {
  }

}
