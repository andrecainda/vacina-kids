import { Router } from '@angular/router';
import { ChildService } from '../../../core/services/child.service';
import { VaccinationService } from 'src/app/core/services/vaccination.service';
import { Child } from '../../../core/models/child.model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.page.html',
  styleUrls: ['./children-list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class ChildrenListPage {

  children: Child[] = [];

  constructor(
    private childService: ChildService,
    private vaccinationService: VaccinationService,
    private router: Router
  ) {

    this.children =
      this.childService.getChildren();

  }

  openChild(id: string) {

    this.router.navigate([
      '/children',
      id
    ]);

  }

  getAppliedCount(childId: string): number {

  return this.vaccinationService
    .getAppliedCount(childId);

}

getPendingCount(childId: string): number {

  return this.vaccinationService
    .getPendingCount(childId);

}

getOverdueCount(childId: string): number {

  return this.vaccinationService
    .getOverdueCount(childId);

}

getOverallStatus(childId: string): string {

  const overdue =
    this.getOverdueCount(childId);

  const pending =
    this.getPendingCount(childId);

  if (overdue > 0) {
    return 'Atrasado';
  }

  if (pending > 0) {
    return 'Atenção';
  }

  return 'Em dia';

}

getCompletionPercentage(
  childId: string
): number {

  return this.vaccinationService
    .getCompletionPercentage(childId);

}
}
