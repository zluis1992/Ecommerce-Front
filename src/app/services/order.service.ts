import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { OrderRequestDTO } from '../DTO/OrderRequestDTO'


@Injectable({
  providedIn: 'root'
})

export class OrderService {

  APIORDER_URL: string = environment.APIORDER_URL

  constructor(
    private http: HttpClient
  ) { }

  private setParameter(routeParams:any):HttpParams{
    let queryParams = new HttpParams()
    for (const key in routeParams){
      if (routeParams.hasOwnProperty(key)){
        queryParams = queryParams.set(key,routeParams[key])
      }
    }
    return queryParams
  }

  getListOrders = (param: any = {}) => this.http.get( `${this.APIORDER_URL }order`,{params:this.setParameter(param)} )

  postInsertOrder(param: any = {}): Observable<OrderRequestDTO> {
    return this.http.post<OrderRequestDTO>( `${this.APIORDER_URL }order`, param)  
  }
  putUpdateOrder(param: any = {}): Observable<OrderRequestDTO> {
    return this.http.put<OrderRequestDTO>( `${this.APIORDER_URL }order/${param.id}`, param)  
  }
 
  deleteUpdateOrders(id: string){
    return this.http.delete( `${this.APIORDER_URL }order/${id}` )
  }
}
