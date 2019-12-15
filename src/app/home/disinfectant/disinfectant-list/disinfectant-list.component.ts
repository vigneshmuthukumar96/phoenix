import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-disinfectant-list',
  templateUrl: './disinfectant-list.component.html',
  styleUrls: ['./disinfectant-list.component.scss']
})
export class DisinfectantListComponent implements OnInit {
  searchKey: any;
  feedJson = [
    { header: 'SECURE ALL', url: 'assets/images/secure-all.jpg',template:'secure-all',text:"Secure All is a non irritant, easy to use product with descaling properties that dissolves biofilms present in the pipelines. Owing to the action ofcitric acid present in the combination, It acts as a descaler and decrease the pH of water, thus has an effective gut effect." },
    { header: 'P3DEX', url: 'assets/images/p3dex-outer.jpg',template:'p3dex',text:"Highly recommended for surface Decontamination, Terminal Disinfection, Sanitization of Equipment’s and Vehicle and personal Hygiene" },
    { header: 'OPTI-CiO2 ', url: 'assets/images/opti-cio2-feed.jpg',template:'opti-cio2',text:"Highly Efficacious & Cost Effective Drinking Water treatment.Cooling tower Water treatment as an Oxidising Biocide.Agriculture: Dairy Processing, Fruits, Vegetables washing and treatment" },
    { header: 'OBACO ', url: 'assets/images/obaco-feed.jpg',template:'obaco',text:"Effectively kills microorganism, such as bacteria, Virus parasites and Control water borne diseases.Long shelf life eliminates odoract and act as water deodrant." },
    { header: 'FLY OUT  ', url: 'assets/images/fly-out-1.jpg',template:'fly-out',text:"Fly out is 100% safe and environment friendly. It protects your diary farms and poultry farms from insect problems with our nontoxic natural liquid concentrate ." },
    { header: 'INSECTICIDES  ', url: 'assets/images/insecticides-5.jpg',template:'insecticides',text:"" },
    { header: 'PHARMACEUTICALS  ', url: 'assets/images/pharma-2.jpg',template:'pharmaceuticals',text:"" },
    
  ]
  constructor(private util:UtilService) { }

  ngOnInit() {
  }

  route(template){
    this.util.route('disinfectant',{ data: JSON.stringify(template) })
  }

}
