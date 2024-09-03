import {
  Component, OnInit,} from '@angular/core'
import localeEs from '@angular/common/locales/es-CO'
import { registerLocaleData } from '@angular/common'
import { environment } from '../../../environments/environment'
import { ServicesService } from '../../services.service'
registerLocaleData(localeEs, 'es-CO')

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  ASSET_PATH: string = environment.ASSET_PATH
  cardsData: any = {}

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    /* this.servicesService.setLoadingVisible(true)
    this.servicesService.getDashDoardCount().subscribe((response: any[]) => {
      this.cardsData = response
      this.servicesService.setLoadingVisible(false)
    }) */
  }
}
