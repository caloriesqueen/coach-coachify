import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts2 = {
    slidesPerView: 5,
    initialSlide: 1,
    speed: 400,
    loop: true,
  };
  constructor() {}

}
