import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/mock-tasks';
 
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text?: string;
  day?: string;
  reminder: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
     if (!this.text) {
      alert('Please add a task!')
      
      return 
     }
     const newTask: Task ={
      text: this.text,
      day: this.text,
      reminder: this.reminder,
     }
     // emit event
     this.onAddTask.emit(newTask);
     
     this.text='';
     this.text='';
     this.reminder=false;
  }

}
