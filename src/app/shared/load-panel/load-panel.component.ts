import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.reducers'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import * as reduxActions from '../../store/actions'

@Component({
  selector: 'app-load-panel',
  templateUrl: './load-panel.component.html',
  styleUrls: ['./load-panel.component.scss'],
})
export class LoadPanelComponent implements OnInit {

  loadingVisible: boolean = false

  constructor( private store: Store<AppState> ) {
    this.store.select('loadingVisible').subscribe(res => this.loadingVisible = res)
  }

  ngOnInit() {}

}
