import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>( `${this.apiServerUrl}/employees/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>( `${this.apiServerUrl}/employees/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>( `${this.apiServerUrl}/employees/${employee.employeeCode}`, employee);
  }

  public deleteEmployee(employeeCode: string): Observable<void> {
    return this.http.delete<void>( `${this.apiServerUrl}/employees/${employeeCode}`);
  }
}
