import { Component, Input, OnInit } from '@angular/core';
import { Task} from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() task?: Task;
tasks: Task[]= [];
  constructor(private taskService:TaskService) { }
  
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks)
  }

  deleteTask(task?:Task){
    if(task)this.taskService.deleteServiceTask(task).subscribe(()=>this.tasks=this.tasks.filter(t=>t.id!==task.id))
  }
  
  toggleReminder(task:Task){
if (task)task.reminder= !task.reminder;
this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task:Task){
    console.log(this.tasks);
    
    this.taskService.addTaskService(task).subscribe((task)=>this.tasks.push(task))
    
  }

}
