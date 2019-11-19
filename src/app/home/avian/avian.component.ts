import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avian',
  templateUrl: './avian.component.html',
  styleUrls: ['./avian.component.scss']
})
export class AvianComponent implements OnInit {
  template: any;

  constructor(route:ActivatedRoute) { 
    if (route.queryParams['value'].data && JSON.parse(route.queryParams['value'].data)) {
      this.template = JSON.parse(route.queryParams['value'].data);
    }
  }

  ngOnInit() {
  }

}
