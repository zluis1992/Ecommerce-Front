import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ProductDTO } from '../../DTO/ProductDTO';
import { ProductService } from '../../services/product.service';
import * as moment from 'moment';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
})
export class FormOrderComponent implements OnInit {
  @Output() crudEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() crud: any = {
    order: {},
    action: 'INSERT',
  };
  currentDate: Date = new Date();
  soloDate: string = '';
  modoView: boolean = false;
  products: ProductDTO[] = [];

  /* Notifications */
  notifications: any[] = [];

  constructor(private productService: ProductService) {
    const unitValue = 0;
    const quantity = this.crud.order.quantity ?? 1;

    const newProperties = {
      productName: '',
      quantity: quantity,
      unitValue: unitValue,
      totalValue: unitValue * quantity,
    };

    this.crud.order = {
      ...this.crud.order,
      ...newProperties,
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
    if (event && event.selectedItem) {
      const selectedProductId = event.selectedItem.id;
      if (selectedProductId !== null && selectedProductId !== undefined) {
        this.crud.order.productId = selectedProductId;

        const selectedProduct = this.products.find(
          (product) => product.id === selectedProductId
        );

        if (selectedProduct) {
          this.crud.order.unitValue = selectedProduct.price;
          this.crud.order.totalValue =
            selectedProduct.price * (this.crud.order.quantity || 0);
        } else {
          this.crud.order.unitValue = 0;
          this.crud.order.totalValue = 0;
        }
      }
    }
  }

  submit(event: Event) {
    event.preventDefault();

    this.crud.order = {
      id: this.crud.order.id,
      orderDate: moment(this.crud.order.orderDate).format('YYYY-MM-DD'),
      productId: this.crud.order.productId,
      quantity: this.crud.order.quantity,
    };

    this.crudEvent.emit({ ...this.crud });
    this.crud.order = {};
  }

  buttonOptionsSave = {
    text: 'Guardar',
    type: 'default',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  };

  onQuantityChanged(event: any) {
    this.crud.order.quantity = event.value;
    this.crud.order.totalValue =
      this.crud.order.quantity * this.crud.order.unitValue;
  }
}
