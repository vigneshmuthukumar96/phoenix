import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent implements OnInit {

  constructor(public translate: TranslateService,private util:UtilService) { 
    this.util.lang.subscribe(value=>{
      if(value) translate.use(value)
    })
  }

  ngOnInit() {
  }

}
