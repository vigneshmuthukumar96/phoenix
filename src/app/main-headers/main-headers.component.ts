import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-main-headers',
  templateUrl: './main-headers.component.html',
  styleUrls: ['./main-headers.component.scss']
})
export class MainHeadersComponent implements OnInit {
  curTab: any;
  constructor(public translate: TranslateService, private util: UtilService) {

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
}
