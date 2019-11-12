import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHeadersComponent } from './main-headers/main-headers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:MainHeadersComponent,
    children:[
      {
        path:'',
        loadChildren:'./home/home.module#HomeModule'
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
