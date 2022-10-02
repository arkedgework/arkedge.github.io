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
    'icon' : '#icon_mgmt',
    'title' : 'Requirement Elicitation',
    list : [
      {'list' : 'User stories/ Use cases'},
      {'list' : 'Prototyping'},
      {'list' : 'Continuous feedback'},
      {'list' : 'XXXX'}
    ]
    },
    {
      'icon' : '#icon_mgmt',
      'title' : 'Customized Design',
      list : [
        {'list' : 'Pluggable components'},
        {'list' : 'Configuration driven'},
        {'list' : 'Separation of concerns'},
        {'list' : 'XXXX'}
      ]
      },
      {
        'icon' : '#icon_mgmt',
        'title' : 'Sustainable Analytics',
        list : [
          {'list' : 'Separation of storage'},
          {'list' : 'Separation of computation'},
          {'list' : 'Parallel and distributed'},
          {'list' : 'XXXX'}
        ]
        },
        {
          'icon' : '#icon_mgmt',
          'title' : 'Visualizations',
          list : [
            {'list' : 'Responsive dashboards'},
            {'list' : 'Custom reports'},
            {'list' : 'BI integration'},
            {'list' : 'XXXX'}
          ]
          },
          {
            'icon' : '#icon_mgmt',
            'title' : 'Serverless Architecture',
            list : [
              {'list' : 'Cloud migration services'},
              {'list' : 'Infrastructure automation'},
              {'list' : 'Productionalize ML solutions'},
              {'list' : 'XXXX'}
            ]
            },
            {
              'icon' : '#icon_mgmt',
              'title' : 'Reusable Modules',
              list : [
                {'list' : 'Microservices'},
                {'list' : 'Web services'},
                {'list' : 'Modularization'},
                {'list' : 'XXXX'}
              ]
              },
              {
                'icon' : '#icon_mgmt',
                'title' : 'Integrable solutions',
                list : [
                  {'list' : 'SOA'},
                  {'list' : 'Standard protocols'},
                  {'list' : 'Message and Event driven'},
                  {'list' : 'XXXX'}
                ]
                },
                {
                  'icon' : '#icon_mgmt',
                  'title' : 'Agile Mindset',
                  list : [
                    {'list' : 'Iterative releases'},
                    {'list' : 'Predictable Delivery'},
                    {'list' : 'Welcome Change'},
                    {'list' : 'High Visibility'}
                  ]
                  }
]


}
