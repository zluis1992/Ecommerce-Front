import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO';
registerLocaleData(localeEs, 'es-CO');
import { ServicesService } from '../../services.service';
import {ProductDTO} from '../../DTO/ProductDTO';
import Swal from 'sweetalert2'
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  public titulo: string = ''
  popupVisible: boolean = false;
  products: ProductDTO[] = [];
  crud: any = { product: new ProductDTO(), action: 'INSERT' };

  constructor(
    private servicesService: ServicesService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.servicesService.setLoadingVisible(true);
    this.listarProductos();
    this.iniciarTitulo();
  }

  private iniciarTitulo(){
    switch(this.crud.action){
      case 'INSERT':
        this.titulo="Ingresar nuevo producto"
      break;
      case 'EDIT':
        this.titulo="Editar producto"
      break;
      case 'VIEW':
        this.titulo="Detalles del producto"
    }
  }

  private listarProductos(): void {
    this.productService.getListProductos().subscribe((response: any) => {
      this.products = response;
      this.servicesService.setLoadingVisible(false);
    });
  }

  private postInsertProduct(crud: any): void {
    this.productService.postInsertProduct(crud.product).subscribe((res) => {
      this.servicesService.notify('producto creado exitosamente', 'success');
      this.listarProductos();
      this.servicesService.setLoadingVisible(false);
    });
  }
  private putUpdateProduct(crud: any): void {
    this.productService.putUpdateProduct(crud.product).subscribe((res) => {
      this.servicesService.notify('producto editado exitosamente', 'success');
      this.listarProductos();
      this.servicesService.setLoadingVisible(false);
    });
  }

  public crudProduct(crud: any): void {
    this.popupVisible = false;
    this.servicesService.setLoadingVisible(true);

    switch (crud.action) {
      case 'INSERT':  
        this.postInsertProduct(crud);
        this.servicesService.setLoadingVisible(false);
        break;
      case 'EDIT':  
        this.putUpdateProduct(crud);
        this.servicesService.setLoadingVisible(false);
        break;
    }
  }
  
  deleteProduct( crud : any ) {
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar el Producto ${crud.name}?`,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: `Mejor no`,
    }).then((result) => {
      if (result.isConfirmed) {

        this.productService.deleteUpdateProducts(crud.id).subscribe((res) => {
          this.servicesService.notify('producto eliminado exitosamente', 'success');
          this.listarProductos();
          this.servicesService.setLoadingVisible(false);
        });
      }
    })
  }
  public btnCrearProduct(): void {
    this.crud = { product: new ProductDTO(), action: 'INSERT' };
    this.iniciarTitulo();
    this.popupVisible = true;
  }

  public actionProduct(product: any, action: string): void {
    this.crud = { product: product, action: action };
    this.iniciarTitulo()
    this.popupVisible = true;
  }
  
}
