import { Component } from '@angular/core';
import deMessages from 'devextreme/localization/messages/es.json';
import { locale, loadMessages } from 'devextreme/localization';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    loadMessages(deMessages);
    locale(navigator.language);
  }
}
