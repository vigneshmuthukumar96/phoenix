import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../../services/util.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {
  template: any;

  constructor(public translate: TranslateService,private util:UtilService,route: ActivatedRoute) { 
    if (route.queryParams['value'].data && JSON.parse(route.queryParams['value'].data)) {
      this.template = JSON.parse(route.queryParams['value'].data);
    }

    this.util.lang.subscribe(value=>{
      if(value) translate.use(value)
    })
  }

  ngOnInit() {
  
  }

}
