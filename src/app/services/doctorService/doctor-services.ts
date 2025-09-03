import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorServices {

  constructor(private http: HttpClient) { }

  addDoctors(name: any, specialization: any, experience: any ): Observable<any> {
    const addDocData = { name, specialization, experience };
    return this.http.post(`http://localhost:5000/api/doctors`, addDocData);
  }

}