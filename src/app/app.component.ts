import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cover = 'assets/logo.png';
  title = 'title';
  isShowHideFlag = 'over';

  constructor(private router: Router) {
    router.events.subscribe((routeReconized) => {
      if (routeReconized instanceof RoutesRecognized) {
        console.log('Route', routeReconized);
        this.cover = routeReconized.state.root.firstChild.data.cover;
        this.title = routeReconized.state.root.firstChild.data.title;
      }
    });
  }
  showHide() {

  }

  ngOnInit(): void {
  }

}
