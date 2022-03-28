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

  constructor() { }

  ngOnInit() {
  }

}
