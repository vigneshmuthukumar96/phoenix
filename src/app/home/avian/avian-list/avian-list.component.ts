import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-avian-list',
  templateUrl: './avian-list.component.html',
  styleUrls: ['./avian-list.component.scss']
})
export class AvianListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'AVIAN.LIST-HEADER-1', url: 'assets/images/avilyte-feed.png',template:'avilyte',text:"AVIAN.LIST-TEXT-1" },
    { header: 'AVIAN.LIST-HEADER-2', url: 'assets/images/astromin-feed.png',template:'astromin',text:"AVIAN.LIST-TEXT-2" },
    { header: 'AVIAN.LIST-HEADER-3', url: 'assets/images/fcr-booster-feed.png',template:'fcr-booster',text:"AVIAN.LIST-TEXT-3" },
    { header: 'AVIAN.LIST-HEADER-4', url: 'assets/images/phxliv-feed.png',template:'phxliv',text:"AVIAN.LIST-TEXT-4"  },
    { header: 'AVIAN.LIST-HEADER-5', url: 'assets/images/pcomplex-feed.png',template:'pcomplex',text:"AVIAN.LIST-TEXT-5"  },
    { header: 'AVIAN.LIST-HEADER-6', url: 'assets/images/tricophx-feed.png',template:'tricophx',text:"AVIAN.LIST-TEXT-6"  },
    { header: 'AVIAN.LIST-HEADER-7', url: 'assets/images/phxcal-d-feed.png',template:'phxcal-d',text:"AVIAN.LIST-TEXT-7"  },
    { header: 'AVIAN.LIST-HEADER-8', url: 'assets/images/mycophx-plr-feed.png',template:'mycophx-plr',text:"AVIAN.LIST-TEXT-8"  },
  ]
  constructor(private util:UtilService,public translate: TranslateService) {
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
   }

  ngOnInit() {
  }

  route(template){
    this.util.route('avian',{ data: JSON.stringify(template) })
  }
}
