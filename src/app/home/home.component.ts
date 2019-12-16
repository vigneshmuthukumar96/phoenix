import { Component, OnInit } from '@angular/core';
import { IImage } from '../common/slide-show/IImage';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../services/util.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrls: (string | IImage)[] = [
    { url: 'assets/images/banner-1.png'},
    { url: 'assets/images/banner-2.png'},
    { url: 'assets/images/banner-3.png'},
    { url: 'assets/images/banner-4.png'},
  ];
  constructor(private router: Router, public translate: TranslateService, private util: UtilService) {
    this.util.lang.subscribe(value => {
      if (value) translate.use(value);
    });
  }

  ngOnInit() {
  }

  route(url) {
   this.router.navigateByUrl(url);
  }
}
