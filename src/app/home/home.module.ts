import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeedComponent } from './feed/feed.component';
import { AquacultureComponent } from './aquaculture/aquaculture.component';
import { AvianComponent } from './avian/avian.component';
import { BovineComponent } from './bovine/bovine.component';
import { DisinfectantComponent } from './disinfectant/disinfectant.component';
import { CaprineOvineComponent } from './caprine-ovine/caprine-ovine.component';
import { CamelComponent } from './camel/camel.component';
import { EquineComponent } from './equine/equine.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { AquacultureListComponent } from './aquaculture/aquaculture-list/aquaculture-list.component';
import { AvianListComponent } from './avian/avian-list/avian-list.component';
import { BovineListComponent } from './bovine/bovine-list/bovine-list.component';
import { CaprineOvineListComponent } from './caprine-ovine/caprine-ovine-list/caprine-ovine-list.component';
import { CamelListComponent } from './camel/camel-list/camel-list.component';
import { EquineListComponent } from './equine/equine-list/equine-list.component';
import { ToastrModule } from 'ngx-toastr';
import { DisinfectantListComponent } from './disinfectant/disinfectant-list/disinfectant-list.component';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    HomeComponent,
    FeedComponent,
    AquacultureComponent,
    AvianComponent,
    BovineComponent,
    DisinfectantComponent,
    CaprineOvineComponent,
    CamelComponent,
    EquineComponent,
    FeedListComponent,
    AquacultureListComponent,
    AvianListComponent,
    BovineListComponent,
    CaprineOvineListComponent,
    CamelListComponent,
    EquineListComponent,
    DisinfectantListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    SlideshowModule,
    PipesModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
