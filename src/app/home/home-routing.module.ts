import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FeedComponent } from './feed/feed.component';
import { AquacultureComponent } from './aquaculture/aquaculture.component';
import { AvianComponent } from './avian/avian.component';
import { BovineComponent } from './bovine/bovine.component';
import { CaprineOvineComponent } from './caprine-ovine/caprine-ovine.component';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { AquacultureListComponent } from './aquaculture/aquaculture-list/aquaculture-list.component';
import { AvianListComponent } from './avian/avian-list/avian-list.component';
import { BovineListComponent } from './bovine/bovine-list/bovine-list.component';
import { CaprineOvineListComponent } from './caprine-ovine/caprine-ovine-list/caprine-ovine-list.component';
import { CamelListComponent } from './camel/camel-list/camel-list.component';
import { CamelComponent } from './camel/camel.component';
import { EquineListComponent } from './equine/equine-list/equine-list.component';
import { EquineComponent } from './equine/equine.component';


const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'aquaculture', component: AquacultureComponent},
  { path: 'avian', component: AvianComponent},
  { path: 'bovine', component: BovineComponent},
  { path: 'caprine', component: CaprineOvineComponent},
  { path: 'camel', component: CamelComponent},
  { path: 'equine', component: EquineComponent},
  { path: 'feed-list', component: FeedListComponent},
  { path: 'aqua-list', component: AquacultureListComponent},
  { path: 'avian-list', component: AvianListComponent},
  { path: 'bovine-list', component: BovineListComponent},
  { path: 'caprine-list', component: CaprineOvineListComponent},
  { path: 'camel-list', component: CamelListComponent},
  { path: 'equine-list', component: EquineListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
