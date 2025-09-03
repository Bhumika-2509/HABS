import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookAptService {
  constructor(private http: HttpClient) { }

  bookPatientApt(doctorId: any, patientId: any) {
    const bookAptData = { doctorId, patientId };
    return this.http.post(`http://localhost:5000/api/bookApt`, bookAptData);

  }
}
