import { Injectable } from '@angular/core';
import { VACCINES } from '../mock-data/vaccines.mock';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  getVaccines() {
    return VACCINES;
  }

  getVaccineById(id: string) {

    return VACCINES.find(
      vaccine => vaccine.id === id
    );

  }

}
