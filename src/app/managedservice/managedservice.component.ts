import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managedservice',
  templateUrl: './managedservice.component.html',
  styleUrls: ['./managedservice.component.scss']
})
export class ManagedserviceComponent implements OnInit {

  solution = [
    {
      title: 'Mixed Multimedia Content',
      description: 'Mixed Multimedia Content',
      description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
    },
    {
      title: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
      description: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
      description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
    },
    {
      title: 'Portfolio Item Block Size',
      description: 'Portfolio Item Block Size',
      description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
    },
    {
      title: 'Ajax Expand, Extended Portfolio, or Side Content',
      description: 'Ajax Expand, Extended Portfolio, or Side Content',
      description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
