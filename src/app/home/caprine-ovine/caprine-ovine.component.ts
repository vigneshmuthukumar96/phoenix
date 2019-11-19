import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caprine-ovine',
  templateUrl: './caprine-ovine.component.html',
  styleUrls: ['./caprine-ovine.component.scss']
})
export class CaprineOvineComponent implements OnInit {
  template: any;

  constructor(route:ActivatedRoute) {
    if (route.queryParams['value'].data && JSON.parse(route.queryParams['value'].data)) {
      this.template = JSON.parse(route.queryParams['value'].data);
    }
   }

  ngOnInit() {
  }

}
