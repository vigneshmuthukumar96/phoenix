import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-aquaculture-list',
  templateUrl: './aquaculture-list.component.html',
  styleUrls: ['./aquaculture-list.component.scss']
})
export class AquacultureListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'AQUA SURE', url: 'assets/images/aqua-sure.jpg',template:'aqua-sure',text:"" },
    { header: 'AQUAVIT', url: 'assets/images/aquavit.png',template:'aquavit',text:"" },
    { header: 'GROLIV-A', url: 'assets/images/groliv-a.jpg',template:'groliv-a',text:""  },
    { header: 'CALGRO-A', url: 'assets/images/calgro-a.jpg',template:'calgro-a',text:""  },
    { header: 'FISHCARE', url: 'assets/images/fish-care.png',template:'fish-care',text:""  },
    { header: 'PANACEA', url: 'assets/images/panacea.png',template:'panacea',text:""  },
    { header: 'Hull', url: 'assets/images/hull.jpg',template:'goat-feed',text:""  },
    { header: 'BOON', url: 'assets/images/boon.png',template:'boon',text:""  },
    { header: 'BOOSTER', url: 'assets/images/booster.jpg',template:'booster',text:""  },
    { header: 'O PH', url: 'assets/images/o-ph.jpg',template:'o-ph',text:""},
    { header: 'PROTECT', url: 'assets/images/protect.png',template:'protect',text:""},
    { header: 'RANDMIN', url: 'assets/images/randmin.jpg',template:'randmin',text:""  },
    { header: 'O AMMONIA', url: 'assets/images/o-ammonia.jpg',template:'o-ammonia',text:""  },
    { header: 'MULTIPRO PS+', url: 'assets/images/multipro.png',template:'multipro-ps+',text:""  },
  ]
  constructor(private util:UtilService) { }

  ngOnInit() {
  }

  route(template){
    this.util.route('aquaculture',{ data: JSON.stringify(template) })
  }

}
