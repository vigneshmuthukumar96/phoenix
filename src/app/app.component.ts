import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from './services/util.service';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ PathLocationStrategy ]
})
export class AppComponent {
  title = 'phoenix';
  constructor(public translate: TranslateService,private util:UtilService,private history: PathLocationStrategy){
    this.history.pushState({},"phoenix",'' ,'');
    // window.history.pushState('','phoenix','')
    translate.addLangs(['en', 'malay']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|malay/) ? browserLang : 'en');
    this.util.setObservable('lang',translate.currentLang)
  }
}
