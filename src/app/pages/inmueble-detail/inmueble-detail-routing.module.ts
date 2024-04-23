import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmuebleDetailPage } from './inmueble-detail.page';

const routes: Routes = [
  {
    path: '',
    component: InmuebleDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmuebleDetailPageRoutingModule {}
