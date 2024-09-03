import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { PagesComponent } from './pages.component'
import { ProductoComponent } from './producto/producto.component'
import { OrdenComponent } from './orden/orden.component'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: HomeComponent,


      },
      {
        path: 'producto',
        component: ProductoComponent,


      },
      {
        path: 'ordenes',
        component: OrdenComponent,


        resolve: {
        }
      },
      
      
      
    ]
  }
]

export const PagesRoutes = RouterModule.forChild(routes)
