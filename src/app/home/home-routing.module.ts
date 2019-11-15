import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FeedComponent } from './feed/feed.component';
import { AquacultureComponent } from './aquaculture/aquaculture.component';
import { AvianComponent } from './avian/avian.component';
import { BovineComponent } from './bovine/bovine.component';
import { CaprineOvineComponent } from './caprine-ovine/caprine-ovine.component';
import { TestComponent } from './test/test.component';
import { TestViewComponent } from './test-view/test-view.component';


const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: TestComponent},
  { path: 'aquaculture', component: AquacultureComponent},
  { path: 'avian', component: AvianComponent},
  { path: 'bovine', component: BovineComponent},
  { path: 'caprine', component: CaprineOvineComponent},
  { path: 'test', component: TestComponent},
  { path: 'test-view', component: TestViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
