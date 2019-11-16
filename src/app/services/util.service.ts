import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  // triggering filter data
  private triggerlang = new BehaviorSubject('');
  lang = this.triggerlang.asObservable();
  
  constructor(private router: Router) { }


  route(target, parameters?: any) {
    this.router.navigate([target], { queryParams: parameters});
  }

  setObservable(type,value){
    switch(type){
      case 'lang':this.triggerlang.next(value);break;
    }
  }
}
