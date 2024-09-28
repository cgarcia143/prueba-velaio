import { Injectable } from '@angular/core';
import { ITask } from '../types/types-tasks';
import { BehaviorSubject, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {
  }

  getAllTasks(): any {
    if(localStorage.getItem('tasks')){
      return JSON.parse(localStorage.getItem('tasks'));
    }else {
      localStorage.setItem('tasks', '[]');
      return [];
    }
  }

  updateAllTasks(array: ITask[]){
    localStorage.setItem('tasks', JSON.stringify(array));
    return 'success'
  }

  updateItemStatus(id: number, newStatus: boolean, array: ITask[]): ITask[] {
    const items = array;
    const item = items.find(task => task.id === id);
    
    if (item) {
      item.completed = newStatus;
      this.updateAllTasks(items);
      return items;
    } else {
      return [];
    }
  }
}
