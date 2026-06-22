import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';



import { ChildService } from '../../core/services/child.service';
import { VaccinationService } from '../../core/services/vaccination.service';
import { CampaignService } from '../../core/services/campaign.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonCardContent,
     RouterLink
  ]
})
export class DashboardPage {

  childrenCount = 0;
  appliedVaccines = 0;
  pendingVaccines = 0;
  campaignsCount = 0;

  constructor(
    private childService: ChildService,
    private vaccinationService: VaccinationService,
    private campaignService: CampaignService
  ) {
    this.loadDashboard();
  }

  loadDashboard(): void {

    // Crianças
    this.childrenCount =
      this.childService.getChildren().length;

    // Vacinas
    const records =
      this.vaccinationService.getRecords();

    this.appliedVaccines =
      records.filter(r => r.appliedDate).length;

    this.pendingVaccines =
      records.filter(r => !r.appliedDate).length;

    // Campanhas
    this.campaignsCount =
      this.campaignService.getCampaigns().length;
  }

}
