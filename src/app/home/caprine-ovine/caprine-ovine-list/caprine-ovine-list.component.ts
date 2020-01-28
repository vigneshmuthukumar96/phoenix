import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-caprine-ovine-list',
  templateUrl: './caprine-ovine-list.component.html',
  styleUrls: ['./caprine-ovine-list.component.scss']
})
export class CaprineOvineListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'JEEVAN JR.PRO', url: 'assets/images/jeevan-jrpro-feed.png',template:'jeevan-jrpro',text:"Increases milk production, Milk fat and protein,Inhibits pathogenic microbes and prevents from infectious diseases,Stimulates the growth of healthy microflora in rumen." },
    { header: 'CAPROMIN', url: 'assets/images/capromin-feed.png',template:'capromin',text:"Improvement of feed conversion,During stress conditions like Vaccination, Deworming and Debeaking and improper nutrition." },
    { header: 'OVICOL', url: 'assets/images/ovicol-feed.png',template:'ovical',text:"It improve FCR ratio, heath and weight gain,To correct the liver disorders and prevents liver damage and  neutralize toxicities of metabolites, & bacterial toxins." },
    { header: 'IMMUNIVIT', url: 'assets/images/immunivit-feed.png',template:'immunivit',text:"It improves the skin and fur quality and increase the milk and maintain thickness and improves the immunity in transportation."  },
  
  ]
  constructor(private util:UtilService,public translate: TranslateService) {
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
   }

  ngOnInit() {
  }

  route(template){
    this.util.route('caprine',{ data: JSON.stringify(template) })
  }
}
