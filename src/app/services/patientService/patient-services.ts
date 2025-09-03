import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientServices {

  constructor( private http: HttpClient){ }

  getAllPatients() {
    return this.http.get(`http://localhost:5000/api/patients`);
  }

  addpatient( name: any, age: any, gender: any, mobileNo: any, address: any) {
    const addpatientdata = { name, age, gender, mobileNo, address };
    return this.http.post(`http://localhost:5000/api/patients`, addpatientdata);
  }
  
}
