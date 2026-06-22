import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page')
        .then(m => m.DashboardPage)
  },

  {
    path: 'children',
    loadComponent: () =>
      import('./pages/children/children-list/children-list.page')
        .then(m => m.ChildrenListPage)
  },

  {
    path: 'children/:id',
    loadComponent: () =>
      import('./pages/children/child-details/child-details.page')
        .then(m => m.ChildDetailsPage)
  },

  {
    path: 'campaigns',
    loadComponent: () =>
      import('./pages/campaigns/campaigns.page')
        .then(m => m.CampaignsPage)
  }
];
