import { Injectable } from '@angular/core';
import { CHILDREN } from '../mock-data/children.mock';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  getChildren() {
    return CHILDREN;
  }

  getChildById(id: string) {
    return CHILDREN.find(
      child => child.id === id
    );
  }

}
