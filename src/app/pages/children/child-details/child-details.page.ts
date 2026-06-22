import { Component } from '@angular/core';
import { VaccineService } from '../../../core/services/vaccine.service';
import { ActivatedRoute } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { ChildService } from '../../../core/services/child.service';

import { VaccinationService } from '../../../core/services/vaccination.service';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.page.html',
  styleUrls: ['./child-details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class ChildDetailsPage {

  child: any;

  records: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private childService: ChildService,
    private vaccinationService: VaccinationService,
    private vaccineService: VaccineService
  ) {

    const id =
      this.route.snapshot.paramMap.get('id');

    if (id) {

      this.child =
        this.childService.getChildById(id);

      this.records =
        this.vaccinationService
          .getRecordsByChild(id);

    }


  }

  getStatus(record: any): string {

  return this.vaccinationService
    .getVaccinationStatus(record);

}

getStatusLabel(record: any): string {

  const status =
    this.getStatus(record);

  switch (status) {

    case 'done':
      return 'Aplicada';

    case 'pending':
      return 'Pendente';

    case 'overdue':
      return 'Atrasada';

    default:
      return '-';

  }

}

getVaccineName(vaccineId: string): string {

  const vaccine =
    this.vaccineService.getVaccineById(vaccineId);

  return vaccine?.name || vaccineId;

}
}
