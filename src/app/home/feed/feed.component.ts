import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(public translate: TranslateService,private util:UtilService) { 
    this.util.lang.subscribe(value=>{
      if(value) translate.use(value)
    })
  }

  ngOnInit() {
    
  }

}
