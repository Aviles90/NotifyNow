import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
          },
        ],
      },
      {
        path: 'cuenta',
        children: [
          {
            path: '',
            loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
          },
        ],
      },
      {
        path: '',
        redirectTo: '/home/inicio',
        pathMatch: 'full',
      },
    ],
  },
  // {
  //   path: 'cuenta',
  //   loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  // },
  // {
  //   path: 'inicio',
  //   loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
