import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  constructor( private route: Router ) { }

  handleAddDoctorClick() {
    this.route.navigate(['/addDoctor']);
  }

  handleAddPatientClick() {
    this.route.navigate(['/addPatient']);
  }

  handleBookAptClick() {
    this.route.navigate(['/bookApt']);
  }

  handleCreateNewSlot() {
    this.route.navigate(['/createNewSlot']);
  }

}
