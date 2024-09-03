import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO';
registerLocaleData(localeEs, 'es-CO');
import { ServicesService } from '../../services.service';
import {OrderDTO} from '../../DTO/OrderDTO';
import {OrderRequestDTO} from '../../DTO/OrderRequestDTO';
import Swal from 'sweetalert2'
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  public titulo: string = ''
  popupVisible: boolean = false;
  orders: OrderDTO[] = [];
  /* orderRequest: OrderRequestDTO = new OrderRequestDTO() */
  crud: any = { order: new OrderRequestDTO(), action: 'INSERT' };

  constructor(
    private servicesService: ServicesService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.listarOrdenes();
    this.iniciarTitulo();
  }

  private iniciarTitulo(){
    switch(this.crud.action){
      case 'INSERT':
        this.titulo="Ingresar nueva orden"
      break;
      case 'EDIT':
        this.titulo="Editar orden"
      break;
      case 'VIEW':
        this.titulo="Detalles de la orden"
    }
  }

  private listarOrdenes(): void {
    this.servicesService.setLoadingVisible(true);
    this.orderService.getListOrders().subscribe((response: any) => {
      this.orders = response;
      this.servicesService.setLoadingVisible(false);
    });
  }

  private postInsertOrder(crud: any): void {
    this.servicesService.setLoadingVisible(true);
    this.orderService.postInsertOrder(crud.order).subscribe((res) => {
      this.servicesService.notify('orden creada exitosamente', 'success');
      this.listarOrdenes();
    });
  }
  private putUpdateOrder(crud: any): void {
    this.servicesService.setLoadingVisible(true);
    this.orderService.putUpdateOrder(crud.order).subscribe((res) => {
      this.servicesService.notify('orden editada exitosamente', 'success');
    });
    this.listarOrdenes();
  }

  public crudOrder(crud: any): void {
    this.popupVisible = false;
    this.servicesService.setLoadingVisible(true);

    switch (crud.action) {
      case 'INSERT':  
        this.postInsertOrder(crud);
        this.servicesService.setLoadingVisible(false);
        break;
      case 'EDIT':  
        this.putUpdateOrder(crud);
        this.servicesService.setLoadingVisible(false);
        break;
    }
  }
  
  deleteOrder( crud : any ) { 
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar la orden?`,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: `Mejor no`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicesService.setLoadingVisible(true)
        this.orderService.deleteUpdateOrders(crud.id).subscribe((res) => {
          this.servicesService.notify('orden eliminado exitosamente', 'success');
          this.listarOrdenes();
        });
      }
    })
  }
  public btnCrearOrder(): void {
    this.crud = { order: new OrderRequestDTO(), action: 'INSERT' };
    this.iniciarTitulo();
    this.popupVisible = true;
  }

  public actionOrder(order: any, action: string): void {
    this.crud = { order: order, action: action };
    this.iniciarTitulo()
    this.popupVisible = true;
  }


}
