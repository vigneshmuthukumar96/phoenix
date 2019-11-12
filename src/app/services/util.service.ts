import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  // triggering filter data
  private triggerlang = new BehaviorSubject('');
  lang = this.triggerlang.asObservable();
  
  constructor() { }


  setObservable(type,value){
    switch(type){
      case 'lang':this.triggerlang.next(value);break;
    }
  }
}
