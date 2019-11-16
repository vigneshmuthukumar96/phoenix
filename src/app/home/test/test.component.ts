import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'Yellow Corn & Corn Silage', url: 'assets/images/corn.jpg' },
    { header: 'PRO PLUS', url: 'assets/images/pro-plus-1.JPG' },
    { header: 'PRO RICH', url: 'assets/images/pro-rich-2.JPG' },
    { header: 'GOLD SPECIAL HI PRO PELLET', url: 'assets/images/pro-pellet-1.JPG' },
    { header: 'BY PASS PELLET', url: 'assets/images/pass-pellet-1.JPG' },
    { header: 'GOLD CALF STARTER', url: 'assets/images/calf-starter-1.JPG' },
    { header: 'GOLDEN GOAT FEED', url: 'assets/images/goat-feed-1.JPG' },
    { header: 'VIN AQUA', url: 'assets/images/vin-aqua-1.JPG' },
    { header: 'COTTON SEED CAKE', url: 'assets/images/seed-cake.png' },
    { header: 'RAPESEED CAKE', url: 'assets/images/rapesed-cake.png' },
    { header: 'RAPESEED MEAL', url: 'assets/images/rapesed-meal.png' },
    { header: 'GUAR MEAL', url: 'assets/images/guar-meal.png' },
    { header: 'SOYA DOC / SOYA MEAL', url: 'assets/images/bean.jpg' },
  ]
  constructor(private util:UtilService) { }

  ngOnInit() {
  }


  route(template){
    this.util.route('test-view',{ data: JSON.stringify(template) })
  }
}
