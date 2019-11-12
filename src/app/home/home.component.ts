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
    { url: 'assets/images/background03.jpg', caption: 'Feed',backgroundSize: 'contain', backgroundPosition: 'center',clickAction: () => this.route('feed') },
    { url: 'assets/images/background13.jpg', caption: 'Aquaculture',backgroundSize: 'contain', backgroundPosition: 'center',clickAction: () => this.route('aquaculture')  },
    { url: 'assets/images/background28.jpg', caption: 'Avian',backgroundSize: 'contain', backgroundPosition: 'center',clickAction: () => this.route('avian')  },
    { url: 'assets/images/background36.jpg', caption: 'Bovine',backgroundSize: 'contain', backgroundPosition: 'center',clickAction: () => this.route('bovine')  },
    // { url: 'assets/images/background57.jpg', caption: 'Caprine & Ovine',backgroundSize: 'contain', backgroundPosition: 'center' },
    // { url: 'assets/images/background58.jpg', caption: 'Camel',backgroundSize: 'contain', backgroundPosition: 'center' },
    // { url: 'assets/images/background59.jpg', caption: 'Equine',backgroundSize: 'contain', backgroundPosition: 'center' }
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  route(url){
   this.router.navigateByUrl(url)
  }
}
