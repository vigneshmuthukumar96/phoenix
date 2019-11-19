import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camel',
  templateUrl: './camel.component.html',
  styleUrls: ['./camel.component.scss']
})
export class CamelComponent implements OnInit {
  template: any;

  constructor(route:ActivatedRoute) { 
    if (route.queryParams['value'].data && JSON.parse(route.queryParams['value'].data)) {
      this.template = JSON.parse(route.queryParams['value'].data);
    }
  }

  ngOnInit() {
  }

}
