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

import { Router } from '@angular/router';

import { ChildService } from '../../../core/services/child.service';

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

}
