import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../interfaces/department';
import { City } from '../interfaces/city';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private Url: string = environment.baseUrlPais;

  constructor(private http: HttpClient) { }

  getDepartments() {
    const url = `${this.Url}Department`;
    return this.http.get<Department[]>(url);
  }

  getCitiesByDepartment(idDepartment: number) {
    const url = `${this.Url}Department/${idDepartment}/cities`;
    return this.http.get<City[]>(url).pipe(
      map(cities => cities.map(city => ({ id: city.idCity, name: city.name }))),
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return [];
      })
    );
}
}
