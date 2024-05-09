import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gAnalytics';

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.sendEvent();
  }

  sendEvent() {
    console.log('Event sent');
    this.analyticsService.trackEvent('SCROLL_TO_TOP_CLICKED', 'User scrolled to top of page', 'User Interaction');
    console.log('Event finished');
  }
}
