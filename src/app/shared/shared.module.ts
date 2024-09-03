import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContentComponent } from './header-content/header-content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LoadPanelComponent } from './load-panel/load-panel.component';
import { DxLoadPanelModule } from 'devextreme-angular';

const components = [
  HeaderComponent,
  HeaderContentComponent,
  FooterComponent,
  ControlSidebarComponent,
  SidebarComponent,
  LoadPanelComponent,
  
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule,
    DxLoadPanelModule,
  ]
})
export class SharedModule { }
