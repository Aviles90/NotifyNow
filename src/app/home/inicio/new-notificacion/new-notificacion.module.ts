import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewNotificacionPageRoutingModule } from './new-notificacion-routing.module';

import { NewNotificacionPage } from './new-notificacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewNotificacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewNotificacionPage]
})
export class NewNotificacionPageModule {}
