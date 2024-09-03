import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ProductDTO } from '../../DTO/ProductDTO';
import { OrderRequestDTO } from '../../DTO/OrderRequestDTO';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
})
export class FormOrderComponent implements OnInit {
  @Output() crudEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() crud: any = {
    order: new OrderRequestDTO(),
    action: 'INSERT',
  };

  modoView: boolean = false;
  products: ProductDTO[] = [];
  formData: any = {};
  /* Notifications */
  notifications: any[] = [];

  constructor(private productService: ProductService) {
    this.formData = {
      id: this.crud.order.id,
      orderDate: this.crud.order.orderDate,
      productId: this.crud.order.productId,
      productName: '',
      quantity: this.crud.order.quantity,
      unitValue: 0,
      totalValue: this.formData.unitValue * this.formData.quantity,
    };
  }

  ngOnInit() {
    this.listarProductos();
  }

  ngOnChanges(crud: SimpleChanges) {
    this.modoView = this.crud.action === 'VIEW';
  }
  private listarProductos(): void {
    this.productService.getListProductos().subscribe((response: any) => {
      this.products = response;
    });
  }
  onProductIdValueChanged(event: any) {
    console.log("entré");
    
    const selectedProductId = event.value;
    const selectedProduct = this.products.find(
      (product) => product.id === selectedProductId
    );

    if (selectedProduct) {
      this.formData.unitValue = selectedProduct.price;
      this.formData.totalValue = selectedProduct.price * this.formData.quantity;
    } else {
      this.formData.unitValue = 0;
    }
  }

  submit(event: Event) {
    event.preventDefault();
    this.crudEvent.emit({ ...this.crud });
    this.crud.order = new OrderRequestDTO();
  }

  buttonOptionsSave = {
    text: 'Guardar',
    type: 'default',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  };
}
