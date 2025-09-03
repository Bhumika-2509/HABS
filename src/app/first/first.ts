import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DoctorServices } from '../services/doctorService/doctor-services';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule],
  templateUrl: './first.html',
  styleUrls: ['./first.css']
})
export class First {
  name: string = '';
  specialization: string = '';
  experience: number | null = null;

  constructor(private doctorService: DoctorServices) { }

  onSubmit() {
    if (!this.name || !this.specialization || this.experience === null) {
      alert('Please fill out all fields.');
      return;
    }

    this.doctorService.addDoctors(this.name, this.specialization, this.experience)
      .subscribe({
        next: (response) => {
          console.log('Doctor added:', response);
          alert('Doctor added successfully!');
          this.name = '';
          this.specialization = '';
          this.experience = null;
        },
        error: (err) => {
          console.error('Error adding doctor:', err);
          alert('Something went wrong.');
        }
      });
  }
}
