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
    slidesToShow: 1,
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
          slidesToShow: 1
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

  tech = [
    {
      title :'Web / API Frameworks',
      slist :[
        {
        img: 'assets/images/technology/webapi'
      },
      {
        img: 'assets/images/technology/webapi'
      },
      {
        img: 'assets/images/technology/webapi'
      },
      {
        img: 'assets/images/technology/webapi'
      },
      {
        img: 'assets/images/technology/webapi'
      },
      {
        img: 'assets/images/technology/webapi'
      },
      {
        img: 'assets/images/technology/webapi'
      },
      {
        img: 'assets/images/technology/webapi'
      }
    ]
    },
    {
      title :'Front End',
      slist :[
        {
        img: 'assets/images/technology/frontend'
      },
      {
        img: 'assets/images/technology/frontend'
      },
      {
        img: 'assets/images/technology/frontend'
      },
      {
        img: 'assets/images/technology/frontend'
      },
      {
        img: 'assets/images/technology/frontend'
      },
      {
        img: 'assets/images/technology/frontend'
      },
      {
        img: 'assets/images/technology/frontend'
      },
      {
        img: 'assets/images/technology/frontend'
      },
      {
        img: 'assets/images/technology/frontend'
      },
      {
        img: 'assets/images/technology/frontend'
      }
    ]
    },
    {
      title :'Database and Machine learning',
      slist :[
        {
        img: 'assets/images/technology/ml'
      },
      {
        img: 'assets/images/technology/ml'
      },
      {
        img: 'assets/images/technology/ml'
      },
      {
        img: 'assets/images/technology/ml'
      },
      {
        img: 'assets/images/technology/ml'
      }
    ]
    },
    {
      title :'UI-UX',
      slist :[
        {
        img: 'assets/images/technology/uiux'
      },
      {
        img: 'assets/images/technology/uiux'
      },
      {
        img: 'assets/images/technology/uiux'
      },{
        img: 'assets/images/technology/uiux'
      },
      {
        img: 'assets/images/technology/uiux'
      },
      {
        img: 'assets/images/technology/uiux'
      }
    ]
    },
    {
      title :'Cloud Dav Ops',
      slist :[
        {
        img: 'assets/images/technology/cloud'
      },
      {
        img: 'assets/images/technology/cloud'
      },
      {
        img: 'assets/images/technology/cloud'
      },
      {
        img: 'assets/images/technology/cloud'
      },
      {
        img: 'assets/images/technology/cloud'
      }
    ]
    }
  ];

  principles =[
    {
    'icon' : '#icon_re',
    'title' : 'Requirement Elicitation',
    list : [
      {'list' : 'User stories/ Use cases'},
      {'list' : 'Prototyping'},
      {'list' : 'Continuous feedback'}
    ]
    },
    {
      'icon' : '#icon_cd',
      'title' : 'Customized Design',
      list : [
        {'list' : 'Pluggable components'},
        {'list' : 'Configuration driven'},
        {'list' : 'Separation of concerns'},
        
      ]
      },
      {
        'icon' : '#icon_sa',
        'title' : 'Sustainable Analytics',
        list : [
          {'list' : 'Separation of storage'},
          {'list' : 'Separation of computation'},
          {'list' : 'Parallel and distributed'},
          
        ]
        },
        {
          'icon' : '#icon_visualg',
          'title' : 'Visualizations',
          list : [
            {'list' : 'Responsive dashboards'},
            {'list' : 'Custom reports'},
            {'list' : 'BI integration'},
            
          ]
          },
          {
            'icon' : '#icon_sarch',
            'title' : 'Serverless Architecture',
            list : [
              {'list' : 'Cloud migration services'},
              {'list' : 'Infrastructure automation'},
              {'list' : 'Productionalize ML solutions'},
              
            ]
            },
            {
              'icon' : '#icon_rusable',
              'title' : 'Reusable Modules',
              list : [
                {'list' : 'Microservices'},
                {'list' : 'Web services'},
                {'list' : 'Modularization'},
                
              ]
              },
              {
                'icon' : '#icon_is',
                'title' : 'Integrable solutions',
                list : [
                  {'list' : 'SOA'},
                  {'list' : 'Standard protocols'},
                  {'list' : 'Message and Event driven'},
                  
                ]
                },
                {
                  'icon' : '#icon_mindset',
                  'title' : 'Agile Mindset',
                  list : [
                    {'list' : 'Iterative releases'},
                    {'list' : 'Predictable Delivery'},
                    {'list' : 'Welcome Change'}
                  ]
                  }
]


}
