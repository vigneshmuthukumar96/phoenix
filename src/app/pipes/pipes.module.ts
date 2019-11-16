import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {searchAll} from './custom.pipe';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [searchAll],

  exports: [searchAll],

})
export class PipesModule { }