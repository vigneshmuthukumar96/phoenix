import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aquaculture-list',
  templateUrl: './aquaculture-list.component.html',
  styleUrls: ['./aquaculture-list.component.scss']
})
export class AquacultureListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'AQUACULTURE.LIST-HEADER-1', url: 'assets/images/aqua-sure-feed.png',template:'aqua-sure',text:"AQUACULTURE.LIST-TEXT-1" },
    { header: 'AQUACULTURE.LIST-HEADER-2', url: 'assets/images/aquavit-feed.png',template:'aquavit',text:"AQUACULTURE.LIST-TEXT-2" },
    { header: 'AQUACULTURE.LIST-HEADER-3', url: 'assets/images/groliv-a.jpg',template:'groliv-a',text:"AQUACULTURE.LIST-TEXT-3"  },
    { header: 'AQUACULTURE.LIST-HEADER-4', url: 'assets/images/calgro-a-feed.png',template:'calgro-a',text:"AQUACULTURE.LIST-TEXT-4"  },
    { header: 'AQUACULTURE.LIST-HEADER-5', url: 'assets/images/fish-care.png',template:'fish-care',text:"AQUACULTURE.LIST-TEXT-5"  },
    { header: 'AQUACULTURE.LIST-HEADER-6', url: 'assets/images/panacea-feed.png',template:'panacea',text:"AQUACULTURE.LIST-TEXT-6"  },
    { header: 'AQUACULTURE.LIST-HEADER-7', url: 'assets/images/hull.jpg',template:'hull',text:"AQUACULTURE.LIST-TEXT-7"  },
    { header: 'AQUACULTURE.LIST-HEADER-8', url: 'assets/images/boon.jpg',template:'boon',text:"AQUACULTURE.LIST-TEXT-8"  },
    { header: 'AQUACULTURE.LIST-HEADER-9', url: 'assets/images/booster.jpg',template:'booster',text:"AQUACULTURE.LIST-TEXT-9"  },
    { header: 'AQUACULTURE.LIST-HEADER-10', url: 'assets/images/o-ph.jpg',template:'o-ph',text:"AQUACULTURE.LIST-TEXT-10"},
    { header: 'AQUACULTURE.LIST-HEADER-11', url: 'assets/images/protect.jpg',template:'protect',text:"AQUACULTURE.LIST-TEXT-11"},
    { header: 'AQUACULTURE.LIST-HEADER-12', url: 'assets/images/randmin.jpg',template:'randmin',text:"AQUACULTURE.LIST-TEXT-12"  },
    { header: 'AQUACULTURE.LIST-HEADER-13', url: 'assets/images/o-ammonia.jpg',template:'o-ammonia',text:"AQUACULTURE.LIST-TEXT-13"  },
    { header: 'AQUACULTURE.LIST-HEADER-14', url: 'assets/images/multipro.jpg',template:'multipro-ps+',text:"AQUACULTURE.LIST-TEXT-14"  },
  ]
  constructor(private util:UtilService,public translate: TranslateService) { 
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
  }

  ngOnInit() {
  }

  route(template){
    this.util.route('aquaculture',{ data: JSON.stringify(template) })
  }

}
