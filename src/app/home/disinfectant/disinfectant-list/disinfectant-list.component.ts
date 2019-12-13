import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-disinfectant-list',
  templateUrl: './disinfectant-list.component.html',
  styleUrls: ['./disinfectant-list.component.scss']
})
export class DisinfectantListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'SECURE ALL', url: 'assets/images/sea-biscuit-feed.png',template:'secure-all',text:"" },
    { header: 'P3DEX', url: 'assets/images/sea-biscuit-feed.png',template:'p3dex',text:"" },
    { header: 'OPTI-CiO2 ', url: 'assets/images/sea-biscuit-feed.png',template:'opti-cio2',text:"" },
    { header: 'OBACO ', url: 'assets/images/sea-biscuit-feed.png',template:'obaco',text:"" },
    { header: 'FLY OUT  ', url: 'assets/images/sea-biscuit-feed.png',template:'fly-out',text:"" },
    { header: 'INSECTICIDES  ', url: 'assets/images/sea-biscuit-feed.png',template:'insecticides',text:"" },
    { header: 'PHARMACEUTICALS  ', url: 'assets/images/sea-biscuit-feed.png',template:'pharmaceuticals',text:"" },
    
  ]
  constructor(private util:UtilService) { }

  ngOnInit() {
  }

  route(template){
    this.util.route('disinfectant',{ data: JSON.stringify(template) })
  }

}
