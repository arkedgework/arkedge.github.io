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
      title: 'Technology',
      color: 'faddbe',
      description: ' ',
      icon: '#icon_technology'
    },
    {
      title: 'Travel & Hospitality',
      color: 'fdb6b6',
      description: ' ',
      icon: '#icon_travel'
    },
    {
      title: 'Government & Nonprofit',
      color: 'cce5a2',
      description: ' ',
      icon: '#icon_GovernmentNonprofit'
    },
    {
      title: 'Financial Services',
      color: 'bdd3ff',
      description: ' ',
      icon: '#icon_financialServices'
    },
    {
      title: 'Industrial Manufacturing',
      color: 'b7bdf6',
      description: ' ',
      icon: '#icon_IndustrialManufacturing'
    },
    {
      title: 'Energy & Utilities',
      color: 'f0c1c1',
      description: ' ',
      icon: '#icon_EnergyUtilities'
    },
    {
      title: 'Media & Technology',
      color: 'b6f9d6',
      description: ' ',
      icon: '#icon_MediaTechnology'
    },
    {
      title: 'Telecom',
      color: 'dedf93',
      description: ' ',
      icon: '#icon_Telecom'
    },
    {
      title: 'Oil & Gas',
      color: '8cf3ec',
      description: ' ',
      icon: '#icon_OilGas'
    },
    {
      title: 'Pharma, Health & Life Sciences',
      color: 'f8ddfa',
      description: ' ',
      icon: '#icon_healthCare'
    },
    {
      title: 'Consumer Packaged Goods',
      color: 'f3d68c',
      description: ' ',
      icon: '#icon_Goods'
    },
    {
      title: 'Retail',
      color: 'c8e092',
      description: ' ',
      icon: '#icon_Retail'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
