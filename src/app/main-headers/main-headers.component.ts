import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../services/util.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-headers',
  templateUrl: './main-headers.component.html',
  styleUrls: ['./main-headers.component.scss']
})
export class MainHeadersComponent implements OnInit {
  curTab: any;
  url: string;
  constructor(public translate: TranslateService, private util: UtilService,router: Router) {

    window.onpopstate = (e) => {

      setTimeout(() => {
        switch(true){
          case router.url.includes('home'):this.curTab = "home";break;
          case router.url.includes('feed'):this.curTab = "feed";break;
          case router.url.includes('aquaculture'):this.curTab = "aquaculture";break;
          case router.url.includes('avian'):this.curTab = "avian";break;
          case router.url.includes('bovine'):this.curTab = "bovine";break;
        }
      }, 300);
    
      }

  }

  ngOnInit() {
    this.curTab = "home";
    this.backToTopButtonShow();
  }

  setLang(value) {
    this.translate.use(value)
    $("#lang-name").removeClass()
    switch (value) {
      case 'en': $("#lang-name").addClass("flag-icon flag-icon-us"); break;
      case 'malay': $("#lang-name").addClass("flag-icon flag-icon-my"); break;
      default: $("#lang-name").addClass("flag-icon flag-icon-us")
    }
    this.util.setObservable('lang', value)
  }

  getLanguage(value) {
    switch (value) {
      case 'en': return "English";
      case 'malay': return "Malaysian"
      default: return "English"
    }
  }

  getLangFlag(value) {
    if (!value) return
    switch (value) {
      case 'en': return "flag-icon-us";
      case 'malay': return "flag-icon-my";
      default: return "flag-icon-us";
    }
  }

  backToTopButtonShow() {
    $(document).scroll(function() {
      if ($(document).scrollTop() > 200)
       $('.back-to-top').fadeIn();
      else $('.back-to-top').fadeOut();
    });

    $('.back-to-top').click(function() {
      $("html").animate({ scrollTop : 0 }, 600);
    });
  }


  route(url){
    $("#collapsibleNavbar").removeClass('show')
    $(".navbar-toggler").addClass('collapsed')
    this.util.route(url)
  }
}
