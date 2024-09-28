import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { FormTasksComponent } from './components/form-tasks/form-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    TasksComponent,
    FormTasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatMenuModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatButtonModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule
  ]
})
export class TasksModule { }
