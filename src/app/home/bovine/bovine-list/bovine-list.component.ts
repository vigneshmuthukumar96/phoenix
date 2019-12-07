import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-bovine-list',
  templateUrl: './bovine-list.component.html',
  styleUrls: ['./bovine-list.component.scss']
})
export class BovineListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'JEEVAN PRO', url: 'assets/images/jeevan-pro-feed.png',template:'jeevan-pro',text:"Increases milk production, Milk fat and protein,Inhibits pathogenic microbes and prevents from infectious diseases,Stimulates the growth of healthy microflora in rumen." },
    { header: 'LACTOGRO', url: 'assets/images/lactogro-feed.png',template:'lactogro',text:"High Power of calcium for High yielder,Prevents Milk Fever, Rickets & Hematuria ,Improves Skeletal and Muscular Stength ,Promotes Growth, Increase Libido." },
    { header: 'GRO-LIV', url: 'assets/images/gro-liv-feed.png',template:'gro-liv',text:"Helps in liver regeneration and as an appetizer to stimulant feed intake.It supports the natural Detoxification functions of  Liver and support theraphy after deworming" },
    { header: 'BOVICAL-D', url: 'assets/images/bovical-d-feed.png',template:'bovical-d',text:"Provides optimum calcium, phosphorus, and vitamin D3,Improves milk production in dairy animals,Prevents rickets and Osteomalacia ."  },
    { header: 'PHXLIV-B', url: 'assets/images/phxliv-b-feed.png',template:'phxliv-b',text:"Helps to maintain the proper functioning of the Liver ,Improves Digestion and FCR in Dairy animals,Prevents Liver Damage due to harmful chemicals and toxins ."  },
    
    { header: 'BOVIMIN FORTE', url: 'assets/images/bovimin-forte.jpg',template:'bovimin-forte',text:"An Ultimate mineral mixture for Cattle ,Improves the level of macro and micro minerals,Contains bypass amino acids for better bio availability of protein ."  },
    { header: 'VARSHAMIN STRONG', url: 'assets/images/varshamin-strong.jpg',template:'varshamin-strong',text:"As an aid in treatment of certain skin conditions ,To overcome fat soluble vitamin deficiencies,For better health & improved disease resistance."  },
    { header: 'MINERAL MIX', url: 'assets/images/phxliv-b.jpg',template:'mineral-mix',text:"To Maintain Overall health of animal & to achieve optimum yields."  },
    { header: 'NUTRIMIX', url: 'assets/images/nutri-mix.jpg',template:'nutri-mix',text:"Maximum bio- availability of Minerals ,Improved Fertility ,Healthy Calf ,Improves milk production."  },
    { header: 'CPC', url: 'assets/images/cpc-bovine-feed.png',template:'cpc',text:"CPC Ensures Thorough Cleansing of Uterus post parturition and ensures Timely Expulsion of Placenta (within 3 to 4 hours post-delivery). "  },
  ]
  constructor(private util:UtilService) { }

  ngOnInit() {
  }

  route(template){
    this.util.route('bovine',{ data: JSON.stringify(template) })
  }
}
