import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'Yellow Corn & Corn Silage', url: 'assets/images/corn.jpg',template:'corn',text:"We offer Indian yellow corn, which is procured from the hinterland of India.With uniform grain sizes our corn variety has excellent resistant to blight.Our maize are used as livestock feed, forage, silage etc" },
    { header: 'PRO PLUS', url: 'assets/images/pro-plus-1.png',template:'pro-plus',text:"Bypass protein, Bypass fat and Vitamin AD3 enriched pellet which is recommended for high yielding cows like HF, Jersey, Etc..." },
    { header: 'PRO RICH', url: 'assets/images/pro-rich-2.png',template:'pro-rich',text:"Bypass protein, Bypass fat and Vitamin AD3 enriched pellet which is recommended for high yielding cows like HF, Jersey, Etc..."  },
    { header: 'GOLD SPECIAL HI PRO PELLET', url: 'assets/images/pro-pellet-1.png',template:'pro-pellet',text:"High protein pellet which is recommended for good yielding cows."  },
    { header: 'BY PASS PELLET', url: 'assets/images/pass-pellet-1.png',template:'pass-pellet',text:"Enrich of proteins and vitamins increase digestion."  },
    { header: 'GOLD CALF STARTER', url: 'assets/images/calf-starter-1.png',template:'calf-starter',text:"High protein pellet for calf which helps to express  heat within 12-15 months."  },
    { header: 'GOLDEN GOAT FEED', url: 'assets/images/goat-feed-1.png',template:'goat-feed',text:"Phoenix Golden goat pellet  isenriched with vitamins, yeast and enzymes."  },
    { header: 'VIN AQUA', url: 'assets/images/vin-aqua-1.png',template:'vin-aqua',text:"Balanced & fortified fish feed.Enriched with Vitamins & Micro Nutrients.High Nutrition,Health and Natural."  },
    { header: 'SHELLBY-3000', url: 'assets/images/shelby-3000.png',template:'shelby-3000',text:"We use Soya doc, Maize , Rice DDGS, Rice polish, Rice bran oil, DORB."  },
    { header: 'Broil & Boil', url: 'assets/images/broil-boil.png',template:'broil-boil',text:"We use Soya doc, Maize , Rice DDGS, Rice polish, Rice bran oil, DORB"  },
    { header: 'Jambiri', url: 'assets/images/jambiri.png',template:'jambiri',text:"The ingredients are Fish Meal, Soya Meal, Wheat Flour, Groundnut Cake, Fish Oil, Vitamins & Minerals etc."  },
    { header: 'COTTON SEED CAKE', url: 'assets/images/seed-cake.png',template:'cotton-seed',text:"We offer cotton seed cakes that remains solid once oil has been extracted and pressed from cotton seeds. These cotton seed cakes are widely used in the industry for feeding cattle. We offer at competitive rates, our cotton seed cakes can be supplied to different parts of the world."  },
    { header: 'RAPESEED CAKE', url: 'assets/images/rapeseed-cake.png',template:'rapeseed-cake',text:"Rapeseed cake is co-produced with rapeseed oil in rapeseed crushing process. The rapeseed cake produced contains about 7-10% fat after pressing and is used primarily as a raw material for mixed feed in the animal feed industry. Each cake is approx. 1”diameter by 5/6” thick and consists of Rapeseed oil cake and its powder. No bonemeal or any other animal ingredients."},
    { header: 'RAPESEED MEAL', url: 'assets/images/rapeseed-meal.png',template:'rapeseed-meal',text:"Rapeseed Meal is a coarse powdery material, produced from rapeseed cake after series of preparatory physical processes followed by multistage extraction of oil under hygienically controlled conditions......."},
    { header: 'GUAR MEAL', url: 'assets/images/guar-meal.png',template:'guar-meal',text:"Processed Guar Meal is a high protein feed stuff .It is widely used as partial substitute of soya beans meal. It is processed by toasting at high temperature to remove natural trypsin inhibitor. Thus enhancing its nutritive value and digestibility."  },
    { header: 'SOYA DOC / SOYA MEAL', url: 'assets/images/bean.jpg',template:'soya-meal',text:"We produce highly refined Soya Meal suitable for Poultry and other needs. This high protein component is used as food additive in a variety of products including Wheat Flour for increasing protein component. We also produce animal feed grade Soya DOC used as a major component of cattle feed throughout the world."  },
  ]
  constructor(private util:UtilService) { }

  ngOnInit() {
  }

  route(template){
    this.util.route('feed',{ data: JSON.stringify(template) })
  }
}
