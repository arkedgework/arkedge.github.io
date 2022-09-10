import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  industryInfo = [
    {title : 'IT, Telecom & Software', icon: 'icon_itsoftware'},
    {title : 'Telecom', icon: 'icon_teletower'},
    {title : 'ITES - BPO & KPO', icon: 'icon_bpoKpo'},
    {title : 'Engineering & Manufacturing', icon: 'icon_egmg'},
    {title : 'Consumer Goods & Retail', icon: 'icon_retailflat'},
    {title : 'Banking Financial Services & Insurance', icon: 'icon_accountflat'},
    {title : 'Health Care & Pharmaceuticals', icon: 'icon_vaccineflat'}
  ];

  sevices = [
    {
      title: 'IT, telecom and software',
      color: 'skyblue',
      description: ' ',
      icon: '#icon_telecom'
    },
    {
      title: 'ITES - BPO & KPO',
      color: 'yellow ',
      description: ' ',
      icon: '#icon_customerService'
    },
    {
      title: 'Engineering & Manufacturing',
      color: 'orange',
      description: ' ',
      icon: '#icon_engineeringMgf'
    },
    {
      title: 'Consumer goods and retail',
      color: 'limegreen',
      description: ' ',
      icon: '#icon_retail'
    },
    {
      title: 'Financial services and insurance',
      color: 'purple',
      description: ' ',
      icon: '#icon_finervice'
    },
    {
      title: 'Health care & Pharmaceuticals',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Consumer Packaged Goods',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Energy & Utilities',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Financial Services',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Government & Nonprofit',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Industrial Manufacturing',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Media & Technology',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Oil & Gas',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Pharma, Health & Life Sciences',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Retail',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Technology',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Telecom',
      color: 'blue',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Travel & Hospitality',
      color: 'blue',
      description: ' ',
      icon: '#icon_travel'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
