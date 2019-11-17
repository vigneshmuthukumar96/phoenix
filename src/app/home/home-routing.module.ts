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


const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'aquaculture', component: AquacultureComponent},
  { path: 'avian', component: AvianComponent},
  { path: 'bovine', component: BovineComponent},
  { path: 'caprine', component: CaprineOvineComponent},
  { path: 'feed-list', component: FeedListComponent},
  { path: 'aqua-list', component: AquacultureListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
