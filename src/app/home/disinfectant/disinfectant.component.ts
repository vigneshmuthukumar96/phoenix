import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-disinfectant',
  templateUrl: './disinfectant.component.html',
  styleUrls: ['./disinfectant.component.scss']
})
export class DisinfectantComponent implements OnInit {
  template: any;

  constructor(route:ActivatedRoute,public translate: TranslateService, private util: UtilService) {
    if (route.queryParams['value'].data && JSON.parse(route.queryParams['value'].data)) {
      this.template = JSON.parse(route.queryParams['value'].data);
    }
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
   }

  ngOnInit() {
  }

}
