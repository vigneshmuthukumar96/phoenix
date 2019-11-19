import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-camel-list',
  templateUrl: './camel-list.component.html',
  styleUrls: ['./camel-list.component.scss']
})
export class CamelListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'CAM DTOX', url: 'assets/images/cam-dtox-feed.png',template:'cam-dtox',text:"Vitamin C is a strong antioxidant and is very important to keep the functions and the vitality of cells and connective tissue. Vitamin C is important to strengthen immunity system to help stressful race Camels to recovery soon and to react against pathologies and sickness. Methionine is limited amino acid with a plastic function, Methionine is a liver protector, in fact Methionine metabolize fats so to aid liver functions." },
    { header: 'CPC', url: 'assets/images/cpc-camel-feed.png',template:'cpc',text:"CPC helps Uterus involution and restores milk production associated with uterine disorders.The product has ISO, GMPcertification; Our CPC for cattle is well accepted in the Indian Veterinary Market" },
    { header: 'Cambiotics', url: 'assets/images/cambiotics-feed.png',template:'cambiotics',text:"Improves Efficacy in protein utilization,Prevents mineral and vitamin deficiency,Acts as energy booster before any physical activity." },
  ]
  constructor(private util:UtilService) { }

  ngOnInit() {
  }

  route(template){
    this.util.route('camel',{ data: JSON.stringify(template) })
  }
}
