import { SafeResourceUrl } from "@angular/platform-browser";

export class OrderDTO {

  id: String;
  orderDate: Date;
  productId:string;
  productName:string;
  quantity:number;
  unitValue:number;
  totalValue:number;
  
  /**
   * 
   */
  constructor() {
    this.id='';
    this.orderDate = new Date();
    this.productId = '';
    this.productName='';
    this.quantity = 0;
    this.unitValue = 0;
    this.totalValue = 0;
    
  }
}