import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from '../shared/sortable.directive';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent, 
    EmployeeAddComponent,
    NgbdSortableHeader
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    CommonModule,
    HttpClientModule,
    NgbModule
  ]
})

export class EmployeeModule { }