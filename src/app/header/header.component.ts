import { Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  list;
  managedService;
  managedServiceSoftEng;
  isOpen = true;
  isSlideOpen = true;
  @ViewChild("dropDown",{static:true}) dropDown: ElementRef;

  constructor(private sharedservice: SharedService) {
    this.list = [
        {name: 'WhyArkedgeTchnologies'},
        {name: 'OurHappyClients'},
        {name: 'NewsAndEventUpdate'},
        {name: 'TestimonialClientSpeaks'},
        {name: 'Industries'},
        {name: 'Technology'},
        {name: 'Career'},
        {name: 'Sitemap'}
    ];
    this.managedService = [
      {name: 'SoftwareEngineering',
      managedServiceList : [
        {name: 'ProductEngineering'},
        {name: 'ApplicationDevelopment'},
        {name: 'Ux/UiDevelopment'},
        {name: 'SoftwareTesting & Qa'}
      ]},
      {name: 'DataServices',
      managedServiceList : [
        {name: 'DataEngineering'},
        {name: 'DataManagement'},
        {name: 'DataScience'},
        {name: 'CloudComputing'},
       
      ]},
      {name: 'ItStafingAndServices',
      managedServiceList : [
        {name: 'StaffingServices'},
        {name: 'StaffingIndustry'},
        {name: 'It Training'},
        {name: 'ProgramSchedule'}
      ]}
    ];
  }

  slideToggel() {
    const body = document.getElementsByTagName('body')[0];
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      body.classList.add('remove-scroll');
    } else {
      body.classList.remove('remove-scroll'); 
    }
  }


  ngOnInit() {
  }

  changeStyle(){
     this.dropDown.nativeElement.hidden = false;
  }

  getUrl(i, title) {
    this.dropDown.nativeElement.hidden = true;
    this.sharedservice.nextMessage(i, title);
  }

}
