import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ProductDTO } from '../../DTO/ProductDTO';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  @Output() crudEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() crud: any = {
    product: new ProductDTO(),
    action: 'INSERT',
  };

  modoView: boolean = false;

  /* Notifications */
  notifications: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(crud: SimpleChanges) {
    this.modoView = this.crud.action === 'VIEW';
  }


  submit(event: Event) {
    event.preventDefault();
    this.crudEvent.emit({ ...this.crud });
    this.crud.product = new ProductDTO();
    
  }
  
  buttonOptionsSave = {
    text: 'Guardar',
    type: 'default',
    icon: 'fa fa-save',
    width: '200',
    useSubmitBehavior: true,
  };

}
