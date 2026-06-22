import { Injectable } from '@angular/core';
import { CAMPAIGNS } from '../mock-data/campaigns.mock';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  getCampaigns() {
    return CAMPAIGNS;
  }

}
