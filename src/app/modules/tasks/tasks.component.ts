import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITask, IPerson } from './types/types-tasks';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormTasksComponent } from './components/form-tasks/form-tasks.component';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //Tables
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns = ['name', 'deadline', 'status', 'persons', 'options']
  tasks: ITask[] = [];

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _matDialog: MatDialog,
    private _taskService: TasksService
  ) {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this.tasks = this._taskService.getAllTasks();
    this.dataSource.data = this.tasks;
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  filterTasks(status: string) {
    if (status === 'all') {
      this.dataSource.data = this.tasks;
    } else if (status === 'completed') {
      this.dataSource.data = this.tasks.filter(task => task.completed);
    } else if (status === 'pending') {
      this.dataSource.data = this.tasks.filter(task => !task.completed);
    }
  }

  createTask(): void {
    const formDialog = this._matDialog.open(FormTasksComponent, {
        autoFocus: false,
        disableClose: true,
    });

    formDialog.afterClosed().subscribe((data) => {
      if(data){
        this.tasks.push(data);
        this._taskService.updateAllTasks(this.tasks);
        this.dataSource.data = this.tasks;
      }
    });
  }

  updateTask(index: number, newStatus: boolean){
    this._taskService.updateItemStatus(index,newStatus,this.tasks);
  }

}
