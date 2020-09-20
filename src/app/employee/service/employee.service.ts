import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  apiUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}employees`);
  }

  getEmployeeById(employeeId): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}employee/${employeeId}`);
  }

  createEmployees(reqModel): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}create`, reqModel);
  }

  updateEmployees(employeeId, reqModel): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}update/${employeeId}`, reqModel);
  }

  deleteEmployee(employeeId): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}delete/${employeeId}`);
  }
}