import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { InmuebleDetailPageModule } from '../inmueble-detail/inmueble-detail.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePage } from './home.page';
import { LoginPageModule } from '../login/login.module';


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
