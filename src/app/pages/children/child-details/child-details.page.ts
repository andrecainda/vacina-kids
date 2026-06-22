import { Component } from '@angular/core';

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
    private vaccinationService: VaccinationService
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

}
