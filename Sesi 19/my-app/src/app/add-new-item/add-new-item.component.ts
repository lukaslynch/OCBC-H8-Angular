import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddniComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() onClickEventHandler = new EventEmitter();

  AddNewItem(value: string){
    this.newItemEvent.emit(value)
  }

  RemoveItem(){
    this.onClickEventHandler.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
