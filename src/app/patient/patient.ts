import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientServices } from '../services/patientService/patient-services';

@Component({
  selector: 'app-patient',
  imports: [NgFor, FormsModule, HttpClientModule, NgIf],
  templateUrl: './patient.html',
  styleUrl: './patient.css'
})
export class Patient {

  name: string = '';
  age: number | null = null;
  gender: string = '';
  mobileNo: number | null = null;
  address: string = '';
  showAddPatient: boolean = false;
  allPatients: any = [];

  constructor(private patientService: PatientServices) { }

  ngOnInit() {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getAllPatients()
      .subscribe(res => {
        this.allPatients = res;
      })
  }

  addNewPatient() {
    this.showAddPatient = true;
  }

  onSubmit() {
    if (!this.name || !this.age || !this.gender || !this.mobileNo || !this.address) {
      window.alert("Please fill all the necessary fields");
      return;
    }

    this.patientService.addpatient(this.name, this.age, this.gender, this.mobileNo, this.address)
      .subscribe({
        next: (response) => {
          console.log("Patient added successfully", response);
          this.showAddPatient = false;
          this.name = '',
            this.age = null,
            this.gender = '';
          this.mobileNo = null;
          this.address = '';
        },
        error: (err) => {
          console.log("Error occured", err);
          alert('Something went wrong.');
        }
      })
  }

}
