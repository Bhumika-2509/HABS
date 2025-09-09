import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlotsService } from '../../services/slotService/slots-service';

@Component({
  selector: 'app-create-slots',
  imports: [NgFor, FormsModule, HttpClientModule, NgIf],
  templateUrl: './create-slots.html',
  styleUrl: './create-slots.css'
})

export class CreateSlots {
  showCreateNewSlot: boolean = false;
  slotTime: string = "";
  status: string = "";
  allAvlSlots: any = [];

  constructor(private createSloteSer: SlotsService) { }

  ngOnInit(): void {
    this.getAllAvlSlots();
  }

  getAllAvlSlots() {
    this.createSloteSer.getAllAvlSlots()
      .subscribe({
        next: (res) => {
          this.allAvlSlots = res;
        },
        error: (err) => {
          console.log("Some error occured", err);
          alert("Error Occured");
        }
      })

  }

  handleAddNewSlotClick() {
    this.showCreateNewSlot = true;
  }

  onSubmit(): void {
    this.createSloteSer.createNewSlots(this.slotTime, this.status)
      .subscribe({
        next: (res) => {
          console.log("New Slot create successfully", res);
          this.slotTime = '';
          this.status = '';
          this.getAllAvlSlots();
        },
        error: (err) => {
          console.log("Some error occured", err);
          window.alert(`Something went wrong: ${err}`);
        }
      })
  }
}
