import { Component, ViewEncapsulation, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationStart, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'arkedge';

  isShow: boolean;
  topPosToStartShowing = 100;
  constructor(private router: Router) {
    this.router.events.subscribe(routerEvent => {
        if (routerEvent instanceof NavigationStart) {
            if (routerEvent.url === '/') {
                this.router.navigate(['home'], {skipLocationChange: true});
            }
        }
    });
}

@HostListener('window:scroll')
checkScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (scrollPosition >= this.topPosToStartShowing) {
    this.isShow = true;
  } else {
    this.isShow = false;
  }
}

// TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

ngOnInit() {
    }

}
