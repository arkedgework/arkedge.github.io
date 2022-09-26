import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sevices;
  solution;
  shortInfo;
  isOpen = true;

  showNavigationArrows = false;

  slideConfig = {
    slidesToShow: 5,
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

  constructor(private router: Router, private sharedservice: SharedService) {
    this.sevices = [
      {
        title: 'IT, telecom and software',
        color: 'skyblue',
        description: '',
        icon: '#icon_telecom'
      },
      {
        title: 'ITES - BPO & KPO',
        color: 'yellow ',
        description: '',
        icon: '#icon_customerService'
      },
      {
        title: 'Engineering & Manufacturing',
        color: 'orange',
        description: '',
        icon: '#icon_engineeringMgf'
      },
      {
        title: 'Consumer goods and retail',
        color: 'limegreen',
        description: '',
        icon: '#icon_retail'
      },
      {
        title: 'Financial services and insurance',
        color: 'purple',
        description: '',
        icon: '#icon_finervice'
      },
      {
        title: 'Health care & Pharmaceuticals',
        color: 'blue',
        description: '',
        icon: '#icon_healthCare'
      },
    ];
    this.solution = [
     {
        title: 'Software Engineering',
        titlelink: 'ProductEngineering',
        color: 'blue',
        list : [
          {name: 'Product Engineering'},
          {name: 'Application Development'},
          {name: 'UX/UI Development'},
          {name: 'Software Testing & QA'}
        ],
        description: 'Software engineering is a concept in and of itself, but to better understand it, you need to know what each part of the term means before you can fully understand how they operate together. It can be difficult to understand, even though it does seem straightforward.',
        icon: '#icon_softEngg'
      },
      {
        title: 'Data Services',
        titlelink: 'DataEngineering',
        color: 'red',
        list : [
          {name: 'Data Engineering'},
          {name: 'Data Management'},
          {name: 'Data Science'},
          {name: 'Cloud Computing'}
        ],
        description: 'Data Services is the practice of collecting, keeping, and using data securely, efficiently, and cost-effectively. The goal of data management is to help people, organizations, and connected things optimize the use of data within the bounds of policy and regulation.',
        icon: '#icon_mgmt'
      },
      {
        title: 'IT Staffing & Training',
        titlelink: 'StaffingServices',
        color: 'green',
        list : [
          {name: 'Staffing Services'},
          {name: 'Industries'},
          {name: 'Courses'},
          {name: 'Program Calendar'}
        ],
        description: `Develop the skills your workforce needs to compete and win. Our curated learning pathways help close knowledge gaps and drive measurable outcomes. Whether you're a team of 5 or 50,000, We offers flexible options to work with your eLearning goals and budgets.`,
        icon: '#icon_training'
      },
    ];

    this.shortInfo = [
      {
        description:`Delivered 150+ Complex products & Projects`
      },
      {
        description:`Over 50 Satisfied Customers across Globe`
      },
      {
        description:`Highly Experienced Quality Professionals Team`
      },
      {
        description:`Expertise 100+ modern Tools and Technologies`
      }
    ]
  }

  
getUrl(i, title){
  if(title == 'ProductEngineering'){
    this.router.navigateByUrl('/SoftwareEngineering' , {skipLocationChange: true}); 
    this.sharedservice.nextMessage(i, 'ProductEngineering')
  }
  else if(title == 'DataEngineering'){
    this.router.navigateByUrl('/DataServices' , {skipLocationChange: true}); 
    this.sharedservice.nextMessage(i, 'DataEngineering')
  }
  else if(title == 'StaffingServices'){
    this.router.navigateByUrl('/ItStafingAndServices' , {skipLocationChange: true}); 
    this.sharedservice.nextMessage(i, 'StaffingServices')
  } 
}
  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  banner = [
    {
      title: 'Customized Solutions',
      title_2: 'For Dynamic Business!',
      description: 'Offers cutting edge technology solutions for specific business needs!',
      icon:"#icon_banner_1"
    },
    {
      title: 'Cloud & DevOps Tech Services to keep your business ahead of the curve!',
      title_2: '',
      description: 'Digital business solutions built for a strong growth with Personal attention of Project Management at Super accessible prices!',
      icon:"#icon_banner_2"
    },
    {
      title: 'Designing digital-first ',
      title_2: 'technologies for the Future Growth!',
      description: `We create digitally connected innovative solutions to enable Business Growth with emerging technologies!
      Talk to our expert`,
      icon:"#icon_banner_3"
    },
    {
      title: 'Product Engineering & Experience Design for delightful user experience!',
      title_2: '',
      description: 'Digital business solutions built for a strong growth with Personal attention of Project Management at Super accessible prices!',
      icon:"#icon_banner_4"
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
      clientName: 'test Company'
    },
    {
      clientView_1: ' Consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
      clientView_2: ' Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
      clientView_3: ' lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
      clientName: 'test Company'
    },
    {
      clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
      clientView_2: ' Due to our close relationships and constant interactions with clients,',
      clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
      clientName: 'test Company'
    },
    {
      clientView_1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      clientView_2: ' Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
      clientView_3: ' Proin sodales pulvinar tempor.',
      clientName: 'test Company'
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

viewMore = function() {
  this.router.navigateByUrl('/Industries', {skipLocationChange: true});
};

btnOurProduct = function() {
  this.router.navigateByUrl('/OurProduct', {skipLocationChange: true});
};

lernmore = function(url) {
  this.router.navigateByUrl('/ManagedServices' , {skipLocationChange: true});
};

addCookies(){
  this.isOpen = !this.isOpen;
}

}

