import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewNotificacionPage } from './new-notificacion.page';

const routes: Routes = [
  {
    path: '',
    component: NewNotificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewNotificacionPageRoutingModule {}
