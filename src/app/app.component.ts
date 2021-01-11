import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { CoverService } from './cover.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  cover = 'assets/logo.png';
  title = 'title';
  isShowHideFlag = 'over';

  constructor(private router: Router, private coverService: CoverService, private cdr: ChangeDetectorRef) {
  }
  showHide() {

  }

  ngOnInit(): void {
    this.router.events.subscribe((routeReconized) => {
      if (routeReconized instanceof RoutesRecognized) {
        console.log('Route', routeReconized);
        this.cover = routeReconized.state.root.firstChild.data.cover;
        this.title = routeReconized.state.root.firstChild.data.title;
      }
    });
  }

  ngAfterViewInit() {
    this.coverService.cover.subscribe(sendedCover => {
      console.log('Sended cover: ', sendedCover);
      this.cover = sendedCover.cover;
      this.title = sendedCover.title;
      this.cdr.detectChanges();
    });
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

}
