import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmuebleDetailPageRoutingModule } from './inmueble-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InmuebleDetailPage } from './inmueble-detail.page';

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
