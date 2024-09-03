import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { PagesRoutes } from './pages.routing'
import { ComponentsModule } from '../components/components.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProductoComponent } from './producto/producto.component'
import { OrdenComponent } from './orden/orden.component'
import { DxTemplateModule, DxDataGridModule, DxPopupModule, DxTextBoxModule, DxListModule, DxSliderModule, DxFormModule, DxTextAreaModule, DxSelectBoxModule, DxCheckBoxModule, DxDateBoxModule, DxButtonModule, DxValidatorModule, DxValidationSummaryModule, DxColorBoxModule, DxScrollViewModule, DxTabPanelModule, DxToastModule, DxValidationGroupModule, DxFileUploaderModule, DxBoxModule, DxChartModule, DxSwitchModule, DxTabsModule, DxNumberBoxModule } from 'devextreme-angular'
import { SharedModule } from '../shared/shared.module'
import { PagesComponent } from './pages.component'

@NgModule({
  imports: [
    CommonModule,
    PagesRoutes,
    ComponentsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DxTemplateModule,
    DxDataGridModule,
    DxPopupModule,
    DxTextBoxModule,
    DxListModule,
    DxSliderModule,
    DxFormModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxToastModule,
    DxScrollViewModule,
    DxTabPanelModule,
    DxValidationGroupModule,
    DxColorBoxModule,
    DxFileUploaderModule,
    DxBoxModule,
    DxChartModule,
    DxSwitchModule,
    DxTabsModule,
    DxNumberBoxModule
  ],
  declarations: [PagesComponent, HomeComponent, ProductoComponent,OrdenComponent]
})
export class PagesModule {}
