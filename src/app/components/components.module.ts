import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormProductComponent } from './form-product/form-product.component';
import { FormOrderComponent } from './form-order/form-order.component';
import { DxoFormatModule } from 'devextreme-angular/ui/nested';

import {
  DxButtonModule,
  DxDataGridModule,
  DxFileUploaderModule,
  DxFormModule,
  DxPopupModule,
  DxScrollViewModule,
  DxSelectBoxModule,
  DxSwitchModule,
  DxDateBoxModule,
  DxDateRangeBoxModule,
  DxNumberBoxModule,
} from 'devextreme-angular';


const componenets = [
  FormProductComponent,
  FormOrderComponent
];

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule,
    DxFormModule,
    DxDataGridModule,
    DxFileUploaderModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxPopupModule,
    DxScrollViewModule,
    DxSwitchModule,
    DxDateBoxModule,
    DxDateRangeBoxModule,
    DxNumberBoxModule,
    DxoFormatModule,
  ],
  declarations: componenets,
  exports: componenets,
})
export class ComponentsModule {}
