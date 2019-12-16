import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  template: any;
  constructor(public translate: TranslateService,private util:UtilService,route:ActivatedRoute) { 

    if (route.queryParams['value'].data && JSON.parse(route.queryParams['value'].data)) {
      this.template = JSON.parse(route.queryParams['value'].data);
    }
    console.log(this.template)
    this.util.lang.subscribe(value=>{
      if(value) translate.use(value)
    })
  }

  ngOnInit() {
  }

}
