import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { DecimalPipe } from '@angular/common';
import { NgbdSortableHeader } from 'src/app/shared/sortable.directive';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [DecimalPipe]
})
export class EmployeeListComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  employees = [];
  employeesList = [];
  page = 1;
  pageSize = 4;
  filter = '';
  collectionSize = 0;
  direction = ''; column = '';

  constructor(public employeeService: EmployeeService, public pipe: DecimalPipe) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      if (res.status && res.data) {
        this.employees = res.data;
        this.employeesList = res.data;
        this.refreshEmployee();
      }
    })
  }

  refreshEmployee() {
    // sorting 
    var employeesList = this.employeesList;
    if (this.direction === '' || this.column === '') {
      employeesList = this.employeesList;
    } else {
      employeesList = [...this.employeesList].sort((a, b) => {
        const res = this.compare(a[this.column], b[this.column]);
        return this.direction === 'asc' ? res : -res;
      });
    }
    
    // searching
    employeesList = employeesList.filter(emp => {
      const term = this.filter.toLowerCase();
      return emp.employee_name.toLowerCase().includes(term)
        || this.pipe.transform(emp.employee_salary).includes(term)
        || this.pipe.transform(emp.employee_age).includes(term);
    });

    // paging
    this.employees = employeesList
      .map((emp, i) => ({ id: i + 1, ...emp }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    this.collectionSize = employeesList.length;    
  }

  onSort({ column, direction }) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.column = column;
    this.direction = direction;
    this.refreshEmployee();
  }

  compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
