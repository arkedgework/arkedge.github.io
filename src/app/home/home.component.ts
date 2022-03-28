import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sevices;
  solution;

  showNavigationArrows = false;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
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

  slideConfig2 = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  constructor(private router: Router) {
    this.sevices = [
      {
        title: 'IT, telecom and software',
        color: 'skyblue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_telecom'
      },
      {
        title: 'ITES - BPO & KPO',
        color: 'yellow ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_customerService'
      },
      {
        title: 'Engineering & Manufacturing',
        color: 'orange',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_engineeringMgf'
      },
      {
        title: 'Consumer goods and retail',
        color: 'limegreen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_retail'
      },
      {
        title: 'Financial services and insurance',
        color: 'purple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_finervice'
      },
      {
        title: 'Health care & Pharmaceuticals',
        color: 'blue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_healthCare'
      },
    ];
    this.solution = [
      {
        title: 'Data Management',
        color: 'red',
        list : [
          {name: 'Cleanse Dataset'},
          {name: 'Data Mapping & Conversion'},
          {name: 'Data Migration & Consolidation'},
          {name: 'Spend Analysis'}
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        icon: '#icon_mgmt'
      },
      {
        title: 'Software Engineering',
        color: 'blue',
        list : [
          {name: 'Product Engineering'},
          {name: 'Application Development'},
          {name: 'UX/UI Development'},
          {name: 'Software Testing & QA'}
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        icon: '#icon_softEngg'
      },
      {
        title: 'IT Staffing & Training',
        color: 'green',
        list : [
          {name: 'Staffing Services'},
          {name: 'Industries'},
          {name: 'Courses'},
          {name: 'Program Calendar'}
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        icon: '#icon_training'
      },
    ];
  }
  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  banner = [
    {
      title: 'WE SPECIALIZE IN IMPROVING',
      title_2: 'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
      description: 'We do this by improving the way our clients use people, processes and technologies'
    },
    {
      title: 'Experience & expertise of',
      title_2: 'consulting in technology & operations.',
      description: 'Offers cutting edge technology solutions for specific business needs'
    },
    {
      title: 'WITH HUGE',
      title_2: 'ANDPERFORMANCE FEATURE UPDATE',
      description: 'Customized Solutions For Dynamic Business'
    }
  ];

  client = [
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'}
  ];

  testimonials = [
    {
      clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
      clientView_2: ' Due to our close relationships and constant interactions with clients,',
      clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
      clientName: 'xyz Company'
    },
    {
      clientView_1: ' Consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
      clientView_2: ' Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
      clientView_3: ' lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
      clientName: 'ABC Company'
    },
    {
      clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
      clientView_2: ' Due to our close relationships and constant interactions with clients,',
      clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
      clientName: '123 Company'
    },
    {
      clientView_1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      clientView_2: ' Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
      clientView_3: ' Proin sodales pulvinar tempor.',
      clientName: 'QWERTy'
    },
];


projects = [
  {
    gridClass: 'col-lg-6 col-md-6 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  }
];



  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

btnClick = function() {
    this.router.navigateByUrl('/Contactus', {skipLocationChange: true});
};

btnOurProduct = function() {
  this.router.navigateByUrl('/OurProduct', {skipLocationChange: true});
};

lernmore = function(url) {
  this.router.navigateByUrl('/ManagedServices' , {skipLocationChange: true});
};

}

