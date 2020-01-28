import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-avian-list',
  templateUrl: './avian-list.component.html',
  styleUrls: ['./avian-list.component.scss']
})
export class AvianListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'AVILYTE', url: 'assets/images/avilyte-feed.png',template:'avilyte',text:" Neutralizes Electrolyte imbalance, To improve immunity & to maintain correct Osmotic pressure , Relieves from all kinds of stress. " },
    { header: 'ASTROMIN', url: 'assets/images/astromin-feed.png',template:'astromin',text:"To improve shell quality & reduce breakages.To Improve body weight, meat quantity and quality.To prevent leg weakness poor feathering and poor hatchability" },
    { header: 'FCR-BOOSTER', url: 'assets/images/fcr-booster-feed.png',template:'fcr-booster',text:"Develops Natural Immunity and reduces use of antibiotics.Reduces and controls pathogenic bacteria.Enhances egg production and meat quality.Improves egg shell quality and strength" },
    { header: 'PHXLIV', url: 'assets/images/phxliv-feed.png',template:'phxliv',text:"Helps in Liver regeneration and as an appetizer to stimulate feed intake in poultry & Farm animals.To counteract aflatoxins in feed, better egg production, weight gain & FCR ."  },
    { header: 'PCOMPLEX', url: 'assets/images/pcomplex-feed.png',template:'pcomplex',text:"It used in during stress conditions like Vaccination, Deworming and Debeakin,during improper nutrition,climate changes,Improvement of feed conversion."  },
    { header: 'TRICOPHX', url: 'assets/images/tricophx-feed.png',template:'tricophx',text:"To correct the liver disorders and prevents liver damage.To neutralize toxicities of metabolites, & bacterial toxins.It improve FCR ratio, heath and weight gain."  },
    { header: 'PHXCAL-D', url: 'assets/images/phxcal-d-feed.png',template:'phxcal-d',text:"For Sturdy bones & Thick Shells in birds.Prevents stunted growth lameness.Improves egg production."  },
    { header: 'MYCOPHX-PLR', url: 'assets/images/mycophx-plr-feed.png',template:'mycophx-plr',text:"MYCOPHX-PLR can be sprayed or poured in feed or drinking water as per the recommendation of poultry consultant or by veterinarian."  },
  ]
  constructor(private util:UtilService,public translate: TranslateService) {
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
   }

  ngOnInit() {
  }

  route(template){
    this.util.route('avian',{ data: JSON.stringify(template) })
  }
}
