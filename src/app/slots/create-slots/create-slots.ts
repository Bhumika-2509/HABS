import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlotsService } from '../../services/slotService/slots-service';

@Component({
  selector: 'app-create-slots',
  // imports: [NgFor, FormsModule, HttpClientModule],
  templateUrl: './create-slots.html',
  styleUrl: './create-slots.css'
})

export class CreateSlots {
  // showCreateNewSlot: boolean = false;

  // constructor(private createSloteSer: SlotsService) { }

  // ngOnInit(): void {
  //   this.handleAddNewSlotClick();
  // }

  // handleAddNewSlotClick() {
  //   this.showCreateNewSlot = true;
  // }

}
