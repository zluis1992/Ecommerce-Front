import { SafeResourceUrl } from '@angular/platform-browser';

export class ProductDTO {
  id: String;
  name: string;
  description: string;
  price: number;

  /**
   *
   */
  constructor() {
    this.id = null;
    this.name = '';
    this.description = '';
    this.price = 1;
  }
}
