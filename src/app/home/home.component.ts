import { Component, OnInit } from '@angular/core';
import { IImage } from '../common/slide-show/IImage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  imageUrls: (string | IImage)[] = [
    { url: 'assets/images/banner-1.png'},
    { url: 'assets/images/banner-2.png'},
    { url: 'assets/images/banner-3.png'},
    { url: 'assets/images/banner-4.png'},
    // { url: 'assets/images/5.jpg'},
    // { url: 'assets/images/6.jpg'},
    // { url: 'assets/images/7.jpg'},
    // { url: 'assets/images/8.jpg'},
    // { url: 'assets/images/9.jpg'},
    // { url: 'assets/images/10.jpg'},
    // { url: 'assets/images/11.jpg'},
    // { url: 'assets/images/12.jpg'},
    // { url: 'assets/images/13.jpg'},
    // { url: 'assets/images/14.jpg'},
    // { url: 'assets/images/15.jpg'},
    // { url: 'assets/images/16.jpg'},
    // { url: 'assets/images/17.jpg'},
    // { url: 'assets/images/18.jpg'},
    // { url: 'assets/images/19.jpg'},
    // { url: 'assets/images/20.jpg'},
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  
  }
 
  route(url){
   this.router.navigateByUrl(url)
  }
 
}
