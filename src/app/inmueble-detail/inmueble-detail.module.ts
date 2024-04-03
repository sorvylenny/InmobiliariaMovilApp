import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmuebleDetailPageRoutingModule } from './inmueble-detail-routing.module';

import { InmuebleDetailPage } from './inmueble-detail.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmuebleDetailPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [InmuebleDetailPage]
})
export class InmuebleDetailPageModule {}
