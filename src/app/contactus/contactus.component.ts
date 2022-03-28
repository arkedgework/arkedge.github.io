import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  activMap = 'Mumbai';
  corporate = true;
  mumbai = false;
  thane = false ;
  contactInfo = [
    { title: 'General Informaton', subtitle: 'Inquiry', id: 'info@arkedge.com', icon: '#icon_contact', phone: '+91 9029290808' },
    { title: 'Sales & Learning', subtitle: 'Business development', id: 'sales@arkedge.com', icon: '#icon_development' },
    { title: 'Current Openings', subtitle: 'Job apply', id: 'careers@arkedge.com', icon: '#icon_approved' }
  ];

  getTouch = [
    { img: 'assets/images/contact', subtitle: 'Corporate Office', street_1: 'Arkedge Technologies Pvt Ltd.703, Wing "B", Galaxy L.X.APT.,', street_2: 'Navre Park, Ambarnath (W),Thane - 421501', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
    { img: 'assets/images/contact', subtitle: 'Mumbai', street_1: '201, B Tower Ashok Nagar, Marol Maroshi Road,', street_2: 'Andheri (E), Mumbai - 400047', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
    { img: 'assets/images/contact', subtitle: 'Thane', street_1: 'B-103, Elegant Tower,Shangvi Complex,,', street_2: 'Mira Road, Thane Mumbai ', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
  ];

  constructor() { }

  ngOnInit() {
  }

  changeMap(map) {
      if (map === 'Corporate Office') {
        this.activMap = 'Corporate Office';
        this.corporate = true;
        this.mumbai = false;
        this.thane = false;
      } else if (map === 'Mumbai') {
        this.activMap = 'Mumbai';
        this.corporate = false;
        this.mumbai = true;
        this.thane = false;
      } else if (map === 'Thane') {
        this.activMap = 'Thane';
        this.corporate = false;
        this.mumbai = false;
        this.thane = true;
      }
  }
}
