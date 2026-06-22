import { Injectable } from '@angular/core';
import { CAMPAIGNS } from '../mock-data/campaigns.mock';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  getCampaigns() {
    return CAMPAIGNS;
  }

  getActiveCampaigns() {
    const today = new Date();

    return CAMPAIGNS.filter(c => {
      const start = new Date(c.startDate);
      const end = new Date(c.endDate);

      return start <= today && end >= today;
    });
  }

}
