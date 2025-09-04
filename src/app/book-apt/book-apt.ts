import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookAptService } from '../services/bookAptService/book-apt-service';

@Component({
  selector: 'app-book-apt',
  imports: [NgFor, FormsModule],
  templateUrl: './book-apt.html',
  styleUrl: './book-apt.css'
})
export class BookApt {
  doctorId: string = '';
  patientId: string = '';

  constructor(private bookaptSer: BookAptService) { }

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
        },
        error: (err) => {
          console.log("Some error occured", err);
          alert('Something went wrong.');
        }
      }
      )
  }
}
