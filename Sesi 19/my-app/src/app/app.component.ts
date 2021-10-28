import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';
  title = 'my-app';
  counter = 0;
  parentMessage ="Halo ini dari Parent"
  items = ['Baju', 'Sepatu', 'Celana', 'Tas', 'Kunci']

  addItemInParent(newItem: string){
    this.items.push(newItem);
  }

  rfItemInParent(){
    this.items.pop()
  }

  addCounter(){
    this.counter++
  }
  minCounter(){
    this.counter--
  }

  resetCounter(){
    this.counter = 0
  }
}
