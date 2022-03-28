import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-advancesolution',
  templateUrl: './advancesolution.component.html',
  styleUrls: ['./advancesolution.component.scss']
})
export class AdvancesolutionComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit() {
  }

}
