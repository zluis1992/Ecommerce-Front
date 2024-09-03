import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../environments/environment'
import Swal from 'sweetalert2'
import { CookieService } from "ngx-cookie-service"
import * as reduxActions from './store/actions'
import { AppState } from './store/app.reducers'
import { Store } from '@ngrx/store'
import { JwtHelperService } from "@auth0/angular-jwt"
import notify from 'devextreme/ui/notify'
@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  APIPRODUCT_URL: string = environment.APIPRODUCT_URL

  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private store: Store<AppState>,
    private helper: JwtHelperService
  ) { }

  setLoadingVisible (loadingVisible: boolean) {
    this.store.dispatch( reduxActions.setLoadingVisible( { loadingVisible: loadingVisible } ) )
  }

  public isAuthenticated(): boolean {
    const token = this.getToken()?.token
    return !this.helper.isTokenExpired(token)
  }

  getToken() {
    return this.cookies.get("access_token") !== '' ? JSON.parse(this.cookies.get("access_token")) : null
  }

  notify(message: string, type: string) {
    notify({
      message: `${message}`,
      type: `${type}`,
      displayTime: 3500,
      animation: {
        show: {
          type: 'fade', duration: 400, from: 0, to: 1,
        },
        hide: { type: 'fade', duration: 40, to: 0 },
      },
    },
    {
      position: 'bottom center',
      direction: 'up-push'
    })
  }

  public notiryConfirmation(params: any = {}): Promise<boolean> {
    return new Promise((resolve) => {
      Swal.fire(params).then(async (result) => resolve(result.isConfirmed))
    })
  }

  public async notifyPrompt(title: string, type: any): Promise<any> {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        input: type,
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (inputValue) => {
          if (inputValue) return inputValue
          else Swal.showValidationMessage('El campo no puede estar vacío')
        },
      }).then((result) => {
        if (result.isConfirmed) resolve(result.value)
      })
    })
  }

 /*  public getDashDoardCount():Observable<any> {
    return this.http.get(`${this.API_URL}tablero`)
  }
 */
}
