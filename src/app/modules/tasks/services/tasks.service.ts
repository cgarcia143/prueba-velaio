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

  updateItemStatus(index: number, newStatus: boolean, array: ITask[]): ITask[] {
    const items = array
    if (index >= 0 && index < items.length) {
      items[index].completed = newStatus;
      this.updateAllTasks(items);
      return items;
    }else {
      return [];
    }
  }
}
