import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inmueble } from '../interfaces/inmueble';
import { Owner } from '../interfaces/owner';
import { DepartmentResponse } from '../interfaces/department-response';
import { CityResponse } from '../interfaces/city-response';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {
   private _allInmueble: BehaviorSubject<Inmueble[]> = new BehaviorSubject<Inmueble[]>([]);

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient){}
  allInmuebles(): Observable<Inmueble[]> {
    const url = `${this.baseUrl}getAll`;
    console.log(url)
    return this.http.get<Inmueble[]>(url).pipe(
      tap(inmuebles => this._allInmueble.next(inmuebles))
    );
  }
  get allInmuebles$(): Observable<Inmueble[]> {
    return this._allInmueble.asObservable();
  }
  seachInmuebles(query: { title?: string; department?: string; city?: string; price?: string; }): Observable<Inmueble[]> {
    const url = `${this.baseUrl}search`;
    const params = new HttpParams()
      .set('title', query.title ? query.title : '')
      .set('department', query.department ? query.department : '')
      .set('city', query.city ? query.city : '')
      .set('price', query.price ? query.price : '');
    return this.http.get<Inmueble[]>(url, { params });
  }

  getInmuebleById(id: string): Observable<Inmueble> {
    const url = `${this.baseUrl}seemore/${id}`;
    console.log(url)
    return this.http.get<Inmueble>(url);
  }

  onwerInmuebles(): Observable<Owner[]> {
    const url = `${this.baseUrl}allOwner`;
    return this.http.get<Owner[]>(url);
  }

  creatOwner(owner: Owner): Observable<Owner> {
    const url = `${this.baseUrl}creatOwner`;
    return this.http.post<Owner>(url, owner);
  }

  newInmueble(inmueble: Inmueble): Observable<Inmueble> {
    const url = `${this.baseUrl}create`;
    return this.http.post<Inmueble>(url, inmueble);
  }

  updateInmuebleById(id: string | any, inmueble: Inmueble): Observable<Inmueble> {
    const propietyId = id._id
    const url = `${this.baseUrl}update/${propietyId}`;
    console.log(url)
    return this.http.put<Inmueble>(url, inmueble).pipe(
      tap(updateInmueble=>{
        updateInmueble.updatedAt = new Date();
      })
    );
  }

  deleteInmuebleById(id: string): Observable<Inmueble> {
    const url = `${this.baseUrl}delete/${id}`;
    return this.http.delete<Inmueble>(url).pipe(
      tap(() => {
        // Después de eliminar un inmueble, actualizar el departamento y la ciudad
        this.updateDashboard();
      })
    );
  }
  private updateDashboard(): void {
    // Llama a los métodos para actualizar el departamento y la ciudad
    this.dashBoardDepartment().subscribe();
    this.dashBoardCities().subscribe();
  }

  dashBoardDepartment(): Observable<DepartmentResponse> {
    const url = `${this.baseUrl}departmentMoreRegistered`;
    console.log(url)
    return this.http.get<DepartmentResponse>(url);
  }

  dashBoardCities(): Observable<CityResponse> {
    const url = `${this.baseUrl}cityMoreRegistered`;
    console.log(url)
    return this.http.get<CityResponse>(url);
  }
}
