import { Component, Input, OnInit } from '@angular/core';
import { Task, TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // @Input() task: Task;
tasks: Task[]= TASKS;
  constructor() { }
  
  ngOnInit(): void {
  }

}
