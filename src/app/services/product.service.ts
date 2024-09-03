import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { ProductDTO } from '../DTO/ProductDTO'


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  APIPRODUCT_URL: string = environment.APIPRODUCT_URL

  constructor(
    private http: HttpClient,
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

  getListProductos = (param: any = {}) => this.http.get( `${this.APIPRODUCT_URL }product`,{params:this.setParameter(param)} )

  postInsertProduct(param: any = {}): Observable<ProductDTO> {
    return this.http.post<ProductDTO>( `${this.APIPRODUCT_URL }product`, param)  
  }
  putUpdateProduct(param: any = {}): Observable<ProductDTO> {
    return this.http.put<ProductDTO>( `${this.APIPRODUCT_URL }product/${param.id}`, param)  
  }
 
  deleteUpdateProducts(id: string){
    return this.http.delete( `${this.APIPRODUCT_URL }product/${id}` )
  }
}
