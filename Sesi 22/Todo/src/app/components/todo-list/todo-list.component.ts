import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]=[]
  editActive = -1
  editText: string | undefined = '';
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      }
    ]
  }

  // AddTodoFormComponent(todo: Todo){
  //   this.todos.push(todo);
  // }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  toggleDone (id:number){
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      console.log(v)
      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  activateEdit(index: number) {
    this.editActive = index
    this.editText = this.todos.find((v,i) => i === index)?.content
  }

  saveEdit() {
    this.todos[this.editActive].content = this.editText
    this.editActive = -1
  }
}
