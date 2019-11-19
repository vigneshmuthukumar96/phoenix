import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equine',
  templateUrl: './equine.component.html',
  styleUrls: ['./equine.component.scss']
})
export class EquineComponent implements OnInit {
  template: any;

  constructor(route:ActivatedRoute) {
    if (route.queryParams['value'].data && JSON.parse(route.queryParams['value'].data)) {
      this.template = JSON.parse(route.queryParams['value'].data);
    }
   }

  ngOnInit() {
  }

}
