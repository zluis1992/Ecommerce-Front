import { SafeResourceUrl } from "@angular/platform-browser";

export class ProductDTO {

  id: String;
  name: string;
  description: string;
  price: number;
  
  /**
   * 
   */
  constructor() {
    this.id='';
    this.name = '1';
    this.description = '1';
    this.price = 1;
    
  }
}