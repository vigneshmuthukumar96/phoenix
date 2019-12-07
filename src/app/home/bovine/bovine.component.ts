import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bovine',
  templateUrl: './bovine.component.html',
  styleUrls: ['./bovine.component.scss']
})
export class BovineComponent implements OnInit {
  template: any;

  constructor(route:ActivatedRoute) {
    if (route.queryParams['value'].data && JSON.parse(route.queryParams['value'].data)) {
      this.template = JSON.parse(route.queryParams['value'].data);
    }
   }

  ngOnInit() {
  }

}
