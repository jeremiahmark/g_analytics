import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gAnalytics';

  sendEvent() {
    console.log('Event sent');
    // gtag('event', 'click', {
    //   'event_category': 'engagement',
    //   'event_label': 'send_event'
    // });
  }
}
