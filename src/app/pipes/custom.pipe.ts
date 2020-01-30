import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core';




@Pipe({
  name: 'searchAll'
})
export class searchAll implements PipeTransform {
  constructor(public translate: TranslateService) { }
  transform(value, keys: any, term?: string): any {
    try {
      if (value && value.length && term) {
        value = (value || []).filter(item => item !== undefined);
        value = (value || []).filter(item =>
          keys.some(key => {
              var val=this.translate.instant(item[key]);
              return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(val)
            }))
          }
          return value;
      }
    catch {

    }
  }
}


