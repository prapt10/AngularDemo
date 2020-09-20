import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
})
export class EmployeeComponent {
    constructor(private authService: AuthService, private router: Router) { }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}