import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-camel-list',
  templateUrl: './camel-list.component.html',
  styleUrls: ['./camel-list.component.scss']
})
export class CamelListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'CAMEL.LIST-HEADER-1', url: 'assets/images/cam-dtox-feed.png',template:'cam-dtox',text:"CAMEL.LIST-TEXT-1" },
    { header: 'CAMEL.LIST-HEADER-2', url: 'assets/images/cpc-camel-feed.png',template:'cpc',text:"CAMEL.LIST-TEXT-2" },
    { header: 'CAMEL.LIST-HEADER-3', url: 'assets/images/cambiotics-feed.png',template:'cambiotics',text:"CAMEL.LIST-TEXT-3" },
  ]
  constructor(private util:UtilService,public translate: TranslateService) { 
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
  }

  ngOnInit() {
  }

  route(template){
    this.util.route('camel',{ data: JSON.stringify(template) })
  }
}
