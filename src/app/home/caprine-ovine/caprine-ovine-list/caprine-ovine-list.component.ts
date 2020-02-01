import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-caprine-ovine-list',
  templateUrl: './caprine-ovine-list.component.html',
  styleUrls: ['./caprine-ovine-list.component.scss']
})
export class CaprineOvineListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'CAPRINE.LIST-HEADER-1', url: 'assets/images/jeevan-jrpro-feed.png',template:'jeevan-jrpro',text:"CAPRINE.LIST-TEXT-1" },
    { header: 'CAPRINE.LIST-HEADER-2', url: 'assets/images/capromin-feed.png',template:'capromin',text:"CAPRINE.LIST-TEXT-2" },
    { header: 'CAPRINE.LIST-HEADER-3', url: 'assets/images/ovicol-feed.png',template:'ovical',text:"CAPRINE.LIST-TEXT-3" },
    { header: 'CAPRINE.LIST-HEADER-4', url: 'assets/images/immunivit-feed.png',template:'immunivit',text:"CAPRINE.LIST-TEXT-4"  },
  
  ]
  constructor(private util:UtilService,public translate: TranslateService) {
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
   }

  ngOnInit() {
  }

  route(template){
    this.util.route('caprine',{ data: JSON.stringify(template) })
  }
}
