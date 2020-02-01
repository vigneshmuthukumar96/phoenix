import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bovine-list',
  templateUrl: './bovine-list.component.html',
  styleUrls: ['./bovine-list.component.scss']
})
export class BovineListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'BOVINE.LIST-HEADER-1', url: 'assets/images/jeevan-pro-feed.png',template:'jeevan-pro',text:"BOVINE.LIST-TEXT-1" },
    { header: 'BOVINE.LIST-HEADER-2', url: 'assets/images/lactogro-feed.png',template:'lactogro',text:"BOVINE.LIST-TEXT-2" },
    { header: 'BOVINE.LIST-HEADER-3', url: 'assets/images/gro-liv-feed.png',template:'gro-liv',text:"BOVINE.LIST-TEXT-3" },
    { header: 'BOVINE.LIST-HEADER-4', url: 'assets/images/bovical-d-feed.png',template:'bovical-d',text:"BOVINE.LIST-TEXT-4"  },
    { header: 'BOVINE.LIST-HEADER-5', url: 'assets/images/phxliv-b-feed.png',template:'phxliv-b',text:"BOVINE.LIST-TEXT-5"  },
    
    { header: 'BOVINE.LIST-HEADER-6', url: 'assets/images/bovimin-forte-outer.jpg',template:'bovimin-forte',text:"BOVINE.LIST-TEXT-6"  },
    { header: 'BOVINE.LIST-HEADER-7', url: 'assets/images/varshamin-strong-outer.jpg',template:'varshamin-strong',text:"BOVINE.LIST-TEXT-7"  },
    { header: 'BOVINE.LIST-HEADER-8', url: 'assets/images/mineral-mix-outer.jpg',template:'mineral-mix',text:"BOVINE.LIST-TEXT-8"  },
    { header: 'BOVINE.LIST-HEADER-9', url: 'assets/images/varshamin-strong-outer.jpg',template:'nutri-mix',text:"BOVINE.LIST-TEXT-9"  },
    { header: 'BOVINE.LIST-HEADER-10', url: 'assets/images/cpc-bovine-feed.png',template:'cpc',text:"BOVINE.LIST-TEXT-10"  },
  ]
  constructor(private util:UtilService,public translate: TranslateService) {
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
   }

  ngOnInit() {
  }

  route(template){
    this.util.route('bovine',{ data: JSON.stringify(template) })
  }
}
