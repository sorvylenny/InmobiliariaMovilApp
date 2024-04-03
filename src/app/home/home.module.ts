import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginPageModule } from '../login/login.module';
import { SharedModule } from '../shared/shared.module';
import { InmuebleDetailPageModule } from '../inmueble-detail/inmueble-detail.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    LoginPageModule,
    SharedModule,
    InmuebleDetailPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
