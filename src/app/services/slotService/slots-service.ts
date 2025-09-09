import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SlotsService {

  constructor(private http: HttpClient) { }

  getAllAvlSlots() {
    return this.http.get(`http://localhost:5000/api/slots/getAllAvblSlots`);
  }

  createNewSlots(slotTime: any, status: any) {
    const newSlotData: any = { slotTime, status };
    return this.http.post(`http://localhost:5000/api/slots/createNewSlot`, newSlotData);
  }

}
