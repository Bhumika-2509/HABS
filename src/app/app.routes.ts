import { Routes } from '@angular/router';
import { First } from './first/first';
import { Layout } from './layout/layout';
import { Patient } from './patient/patient';
import { BookApt } from './book-apt/book-apt';
import { CreateSlots } from './slots/create-slots/create-slots';

// export const routes: Routes = [];

export const routes: Routes = [
  { path: '', component: Layout },
  { path: 'addDoctor', component: First },
  { path: 'addPatient', component: Patient },
  { path: 'bookApt', component: BookApt },
  { path: 'createNewSlot', component: CreateSlots },
];
