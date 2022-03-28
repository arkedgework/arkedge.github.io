import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  careerInfo = [
    {title : 'How We Hire', info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. '},
    {title : 'Employee Benefits', info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. '},
];

career = [
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
];

  constructor() { }

  ngOnInit() {
  }

}
