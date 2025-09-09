import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookAptService } from '../services/bookAptService/book-apt-service';

@Component({
  selector: 'app-book-apt',
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './book-apt.html',
  styleUrl: './book-apt.css'
})
export class BookApt {
  doctorId: string = '';
  patientId: string = '';
  showCreateNewApt: boolean = false;
  allAppointments: any = []

  constructor(private bookaptSer: BookAptService) { }

  ngOnInit() {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.bookaptSer.getAllAppointments()
      .subscribe({
        next: (res) => {
          this.allAppointments = res;
        },
        error: (err) => {
          console.log(" getAllAppointments Error Occured", err);
          alert("Some problem occured in getAllAppointments");
        }
      })
  }

  createNewApt() {
    this.showCreateNewApt = true;
  }

  onBookClick() {
    if (!this.doctorId || !this.patientId) {
      alert("Please fill all fields");
      return;
    }

    this.bookaptSer.bookPatientApt(this.doctorId, this.patientId)
      .subscribe({
        next: (response) => {
          console.log("Appointment booked Succesfully", response);
          this.doctorId = '';
          this.patientId = '';
          this.getAllAppointments();
        },
        error: (err) => {
          console.log("Some error occured", err);
          alert('Something went wrong.');
        }
      }
      )
  }
}
