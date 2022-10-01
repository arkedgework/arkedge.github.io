import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideConfig = {
    rows: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 1500,
    nextArrow: `<div class='slick-prev slick-arrow'>  <i class="icon icon-large">
    <svg focusable="false">
      <use xlink:href="#icon_arrowLeft"></use>
    </svg>
  </i></div>`,
    prevArrow: `<div class='slick-next slick-arrow'>  <i class="icon icon-large">
    <svg focusable="false">
      <use xlink:href="#icon_arrowRight"></use>
    </svg>
  </i></div>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  partner = [
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'}
  ];

}
