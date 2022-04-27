import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  // tasks: Array<string> = [];
  tasks: string[] = [];
  task?: string;

  constructor() { }

  ngOnInit(): void {
  }

  public addTask(): void {
    if( "" != this.task?.trim() ) { // ? = safe operator
      this.tasks.push(this.task!); // ! = sur d'avoir une valeur
      this.task = undefined;
    }
  }

  public removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

}
