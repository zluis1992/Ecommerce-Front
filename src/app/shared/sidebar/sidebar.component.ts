import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user: any = {}

  constructor( private _service: ServicesService, private router: Router ) { }

  ngOnChanges( change: SimpleChanges ) {
    
  }

  ngOnInit() {
    
  }

  

}
