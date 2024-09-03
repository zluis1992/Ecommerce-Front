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
  currentDate: Date = new Date();
  modoView: boolean = false;
  products: ProductDTO[] = [];
  formData: any = {};
  /* Notifications */
  notifications: any[] = [];

  constructor(private productService: ProductService) {
    const unitValue = 0;
    const quantity = this.crud.order.quantity ?? 1;

    this.formData = {
      id: this.crud.order.id,
      orderDate: this.crud.order.orderDate,
      productId: this.crud.order.productId,
      productName: '',
      quantity: quantity,
      unitValue: unitValue,
      totalValue: unitValue * quantity,
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
    if (!!event.selectedItem) this.formData.productId = event.selectedItem.id;
    const selectedProductId = event.selectedItem.id;
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

  onQuantityChanged(event: any) {
    this.formData.quantity = event.value;
    this.formData.totalValue = this.formData.quantity * this.formData.unitValue;
  }
}
