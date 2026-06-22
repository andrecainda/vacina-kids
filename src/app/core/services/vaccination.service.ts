import { Injectable } from '@angular/core';
import { VACCINE_RECORDS } from '../mock-data/vaccine-records.mock';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  getRecords() {
    return VACCINE_RECORDS;
  }

  getRecordsByChild(childId: string) {
    return VACCINE_RECORDS.filter(
      record => record.childId === childId
    );
  }

  isOverdue(record: any): boolean {

    if (record.appliedDate) {
      return false;
    }

    const today = new Date();
    const scheduled = new Date(record.scheduledDate);

    return scheduled < today;
  }

  getVaccinationStatus(
    record: any
  ): 'done' | 'pending' | 'overdue' {

    if (record.appliedDate) {
      return 'done';
    }

    const today = new Date();
    const scheduled = new Date(record.scheduledDate);

    if (scheduled < today) {
      return 'overdue';
    }

    return 'pending';
  }

  getAppliedCount(childId: string): number {

    return this.getRecordsByChild(childId)
      .filter(r => r.appliedDate)
      .length;

  }

  getPendingCount(childId: string): number {

    return this.getRecordsByChild(childId)
      .filter(r => !r.appliedDate)
      .length;

  }

  getOverdueCount(childId: string): number {

    const today = new Date();

    return this.getRecordsByChild(childId)
      .filter(record => {

        if (record.appliedDate) {
          return false;
        }

        return new Date(record.scheduledDate) < today;

      })
      .length;

  }

  getCompletionPercentage(childId: string): number {

  const records =
    this.getRecordsByChild(childId);

  const total =
    records.length;

  const applied =
    records.filter(r => r.appliedDate).length;

  return Math.round(
    (applied / total) * 100
  );

}
}
