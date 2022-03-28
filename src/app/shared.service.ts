import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private urlID = new BehaviorSubject({Id: '1', name: 'title'});
  debbuger;
  sharedMessage = this.urlID.asObservable();

  constructor() { }

  nextMessage(Id, name) {
    this.urlID.next({Id, name});
    window.scrollTo(0, 0);
  }
 }
