import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-equine-list',
  templateUrl: './equine-list.component.html',
  styleUrls: ['./equine-list.component.scss']
})
export class EquineListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'SEA BISCUIT', url: 'assets/images/sea-biscuit-feed.png',template:'sea-biscuit',text:"Natural and Pure Cereal Whole Grain Mix of Oats, Corn, Soyabean,Flax seed, Beet Root, Psyllium Husk, Flaxseed Oil, Rice Bran Oil, Peanuts, Peas, Molasses & Sunflower Seeds etc. " },
    
  ]
  constructor(private util:UtilService) { }

  ngOnInit() {
  }

  route(template){
    this.util.route('equine',{ data: JSON.stringify(template) })
  }
}
