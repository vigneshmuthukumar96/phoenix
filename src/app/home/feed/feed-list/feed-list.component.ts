import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'FEED.LIST-HEADER-1', url: 'assets/images/corn.jpg',template:'corn',text:"FEED.LIST-TEXT-1" },
    { header: 'FEED.LIST-HEADER-2', url: 'assets/images/pro-plus-1.png',template:'pro-plus',text:"FEED.LIST-TEXT-2" },
    { header: 'FEED.LIST-HEADER-3', url: 'assets/images/pro-rich-2.png',template:'pro-rich',text:"FEED.LIST-TEXT-3"  },
    { header: 'FEED.LIST-HEADER-4', url: 'assets/images/pro-pellet-1.png',template:'pro-pellet',text:"FEED.LIST-TEXT-4"  },
    { header: 'FEED.LIST-HEADER-5', url: 'assets/images/pass-pellet-1.png',template:'pass-pellet',text:"FEED.LIST-TEXT-5"  },
    { header: 'FEED.LIST-HEADER-6', url: 'assets/images/calf-starter-1.png',template:'calf-starter',text:"FEED.LIST-TEXT-6"  },
    { header: 'FEED.LIST-HEADER-7', url: 'assets/images/goat-feed-1.png',template:'goat-feed',text:"FEED.LIST-TEXT-7"  },
    { header: 'FEED.LIST-HEADER-8', url: 'assets/images/vin-aqua-1.png',template:'vin-aqua',text:"FEED.LIST-TEXT-8"  },
    { header: 'FEED.LIST-HEADER-9', url: 'assets/images/shelby-3000.png',template:'shelby-3000',text:"FEED.LIST-TEXT-9"  },
    { header: 'FEED.LIST-HEADER-10', url: 'assets/images/broil-boil.png',template:'broil-boil',text:"FEED.LIST-TEXT-10"  },
    { header: 'FEED.LIST-HEADER-11', url: 'assets/images/jambiri.png',template:'jambiri',text:"FEED.LIST-TEXT-11"  },
    { header: 'FEED.LIST-HEADER-12', url: 'assets/images/seed-cake.png',template:'cotton-seed',text:"FEED.LIST-TEXT-12"  },
    { header: 'FEED.LIST-HEADER-13', url: 'assets/images/rapeseed-cake.png',template:'rapeseed-cake',text:"FEED.LIST-TEXT-13"},
    { header: 'FEED.LIST-HEADER-14', url: 'assets/images/rapeseed-meal.png',template:'rapeseed-meal',text:"FEED.LIST-TEXT-14"},
    { header: 'FEED.LIST-HEADER-15', url: 'assets/images/guar-meal.png',template:'guar-meal',text:"FEED.LIST-TEXT-15"  },
    { header: 'FEED.LIST-HEADER-16', url: 'assets/images/bean.jpg',template:'soya-meal',text:"FEED.LIST-TEXT-16"  },
  ]
  constructor(private util:UtilService,public translate: TranslateService) {
    this.util.lang.subscribe(value=>{
      if(value) translate.use(value)
    })
   }

  ngOnInit() {
  }

  route(template){
    this.util.route('feed',{ data: JSON.stringify(template) })
  }
}
