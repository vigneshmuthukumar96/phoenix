import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-aquaculture-list',
  templateUrl: './aquaculture-list.component.html',
  styleUrls: ['./aquaculture-list.component.scss']
})
export class AquacultureListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'AQUA SURE', url: 'assets/images/aqua-sure-feed.png',template:'aqua-sure',text:"Propionic acid improves the energy levels, reduce stress and increase survival rate.Improve feed assimilation enhance the pepsin activity  For Optimal biological value & FCR Propionic &  Formic Acid act as non-antibiotic growth promoter( AGP)." },
    { header: 'AQUAVIT', url: 'assets/images/aquavit-feed.png',template:'aquavit',text:"Improves production and maintains good persistency,Relieves from all kinds of stress , Improves quality of flesh ,More active with good growth and body weights." },
    { header: 'GROLIV-A', url: 'assets/images/groliv-a.jpg',template:'groliv-a',text:"Helps in Liver regeneration and as an appetizer to Stimulate feed intake,Protects  liver from toxins and prevents Fatty  Changes and supports Liver in Metabolism."  },
    { header: 'CALGRO-A', url: 'assets/images/calgro-a-feed.png',template:'calgro-a',text:"It is major component of shrimp shell and  stimulates muscle contraction in shrimp and  reulates nerve transmission"  },
    { header: 'FISHCARE', url: 'assets/images/fish-care.png',template:'fish-care',text:"Priobiotic solution for fish tanks at 100 Rupees per month per Acre. Especially designed for fish ponds which makes the management of pond inexpensive besides eliminated the DO issues in ponds after application of probiotics which in general happens in fish ponds."  },
    { header: 'PANACEA', url: 'assets/images/panacea-feed.png',template:'panacea',text:"One solution for almost all gut and growth related issues in shrimp.       Made up of 100% natural extracts which is non toxic, rich in feed minerals, best growth promoter besides controls and reduces White Gut, White Muscle, Loose Shell, Bends in shrimp."  },
    { header: 'Hull', url: 'assets/images/hull.jpg',template:'hull',text:"Hull is Oil Based Binder by Rand Aqua.A revolutionary product by Rand Aqua which is never before in aquaculture industry. "  },
    { header: 'BOON', url: 'assets/images/boon.jpg',template:'boon',text:"Boon is 100% probiotic solution for pond preparation. Comes with high count of probiotics and will solve almost all kind of pond bottom issues.  No more blading, no more sludge cleaning etc.."  },
    { header: 'BOOSTER', url: 'assets/images/booster.jpg',template:'booster',text:"BOOSTER boosts all desired elements in pond water and soil that will help in growth of animal besides providing desired resistance power in animal by developing micro and macro nutrients, increase dissolved oxygen levels in pond water, increasing fertility in pond water and soil etc., It is named after its performance and it does so."  },
    { header: 'O PH', url: 'assets/images/o-ph.jpg',template:'o-ph',text:"0 pH is the first ever non-chemicl, non-antibiotic, non-toxic and pure probiotic solution that can effectively reduce the pH to desired levels in pond water."},
    { header: 'PROTECT', url: 'assets/images/protect.jpg',template:'protect',text:"Protect is feed based probiotic powder prepared with the combination of powerful probiotic strains and Spirulina which makes is world class feed probiotic with an extensive results and one of our best sellers. It is quite easy to use and can be used from the day 1 of seeding. Hence it is not chemical, non anti-biotic and non toxic, can harm nothing to pond water, bottom or animal."},
    { header: 'RANDMIN', url: 'assets/images/randmin.jpg',template:'randmin',text:"Randmin is a perfect mixture of desired minerlas, vitamins and other contents that replaces deficiencies in pond water. Mineral mixture helps in providing desired minerals to shrimp or fish, improves digestion capability, helps to grow fast and hence the weight gain. Randmin provides essential amino acids and nitrients. Randmin provided desired nutrients that helps in molting process in shrimp."  },
    { header: 'O AMMONIA', url: 'assets/images/o-ammonia.jpg',template:'o-ammonia',text:"0 Ammonia makes Rand Aqua pride in the way it is designed and formulated. It effectively works in pond water and removes Ammonia and Nitrites. Ammonia will be controlled within 72 hours with guaranteed results and gradually removes Nitrites from pond water."  },
    { header: 'MULTIPRO PS+', url: 'assets/images/multipro.jpg',template:'multipro-ps+',text:"Multipro PS+ is a water and soil probiotic solution for Shrimp and Fish. It is the combination of selected probiotic strains like Rhodobacter, Rhodococcus, Bascillus, Paracoccus and few which makes it world class at its best."  },
  ]
  constructor(private util:UtilService) { }

  ngOnInit() {
  }

  route(template){
    this.util.route('aquaculture',{ data: JSON.stringify(template) })
  }

}
