import { SafeResourceUrl } from '@angular/platform-browser';

export class OrderRequestDTO {
  id: String;
  orderDate: Date;
  productId: string;
  quantity: number;

  /**
   *
   */
  constructor() {
    this.id = '';
    this.orderDate = new Date();
    this.productId = '';
    this.quantity = 1;
  }
}
