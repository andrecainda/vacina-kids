import { Campaign } from '../../core/models/campaign.model';
import { Component } from '@angular/core';


import {
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { CampaignService } from '../../core/services/campaign.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
  ]
})
export class CampaignsPage {

  campaigns: Campaign[] = [];

  activeCampaigns: Campaign[] = [];

  constructor(
    private campaignService: CampaignService
  ) {
    this.load();
  }

  load() {

    this.campaigns =
      this.campaignService.getCampaigns();

    this.activeCampaigns =
      this.campaignService.getActiveCampaigns();
  }

  isActive(campaign: any): boolean {

    const today = new Date();

    return new Date(campaign.startDate) <= today &&
           new Date(campaign.endDate) >= today;
  }

}
