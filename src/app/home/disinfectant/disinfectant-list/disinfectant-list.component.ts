import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-disinfectant-list',
  templateUrl: './disinfectant-list.component.html',
  styleUrls: ['./disinfectant-list.component.scss']
})
export class DisinfectantListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'DISINFECTANT.LIST-HEADER-1', url: 'assets/images/secure-all.jpg',template:'secure-all',text:"DISINFECTANT.LIST-TEXT-1" },
    { header: 'DISINFECTANT.LIST-HEADER-2', url: 'assets/images/p3dex-outer.jpg',template:'p3dex',text:"DISINFECTANT.LIST-TEXT-2" },
    { header: 'DISINFECTANT.LIST-HEADER-3', url: 'assets/images/opti-cio2-feed.jpg',template:'opti-cio2',text:"DISINFECTANT.LIST-TEXT-3" },
    { header: 'DISINFECTANT.LIST-HEADER-4', url: 'assets/images/obaco-feed.jpg',template:'obaco',text:"DISINFECTANT.LIST-TEXT-4" },
    { header: 'DISINFECTANT.LIST-HEADER-5', url: 'assets/images/fly-out-1.jpg',template:'fly-out',text:"DISINFECTANT.LIST-TEXT-5" },
    { header: 'DISINFECTANT.LIST-HEADER-6', url: 'assets/images/insecticides-5.jpg',template:'insecticides',text:"DISINFECTANT.LIST-TEXT-6" },
    { header: 'DISINFECTANT.LIST-HEADER-7', url: 'assets/images/pharma-2.jpg',template:'pharmaceuticals',text:"DISINFECTANT.LIST-TEXT-7" },
    
  ]
  constructor(private util:UtilService,public translate: TranslateService) {
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
   }

  ngOnInit() {
  }

  route(template){
    this.util.route('disinfectant',{ data: JSON.stringify(template) })
  }

}
