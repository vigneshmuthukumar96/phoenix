import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disinfectant',
  templateUrl: './disinfectant.component.html',
  styleUrls: ['./disinfectant.component.scss']
})
export class DisinfectantComponent implements OnInit {
  template: any;

  constructor(route:ActivatedRoute) {
    if (route.queryParams['value'].data && JSON.parse(route.queryParams['value'].data)) {
      this.template = JSON.parse(route.queryParams['value'].data);
    }
   }

  ngOnInit() {
  }

}
