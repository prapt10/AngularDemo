import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { AuthGuarder } from '../auth/service/auth-guard.service';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
    {
        path: 'employee',
        component: EmployeeComponent,
        children: [
            {
                path: '',
                canActivateChild: [AuthGuarder],
                children: [
                    { path: '', component: EmployeeListComponent },
                    { path: 'add', component: EmployeeAddComponent },
                ],
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }