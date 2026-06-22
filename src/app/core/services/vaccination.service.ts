import { Injectable } from '@angular/core';

import { VACCINE_RECORDS } from '../mock-data/vaccine-records.mock';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  getRecordsByChild(childId: string) {

    return VACCINE_RECORDS.filter(
      record => record.childId === childId
    );

  }

}
