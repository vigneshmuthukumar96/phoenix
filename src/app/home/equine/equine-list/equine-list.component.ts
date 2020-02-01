import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-equine-list',
  templateUrl: './equine-list.component.html',
  styleUrls: ['./equine-list.component.scss']
})
export class EquineListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'EQUINE.LIST-HEADER-1', url: 'assets/images/sea-biscuit-feed.png',template:'sea-biscuit',text:"EQUINE.LIST-TEXT-1" },
    
  ]
  constructor(private util:UtilService,public translate: TranslateService) { 
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
  }

  ngOnInit() {
  }

  route(template){
    this.util.route('equine',{ data: JSON.stringify(template) })
  }
}
