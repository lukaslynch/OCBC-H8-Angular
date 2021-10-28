import { Component } from '@angular/core';
import { Task } from './models/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Todo';
  categories: string[]= [
    'School', 'Work', 'Hobby'
  ];

  tasks: Task[] = [

  ]

  // Event Handlers
  handleFormOnSubmit (form: NgForm){
    const { name, category } = form.value

    this.tasks.push(new Task(name, "incompleted", category))

    form.reset()
    //console.log({ name, category })
  }

}

