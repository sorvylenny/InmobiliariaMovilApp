import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SmallmapComponent } from './smallmap/smallmap.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ModelsDetailsInmuebleComponent } from './models/models-details-inmueble/models-details-inmueble.component';
import { ModelsInmueblesComponent } from './models/models-inmuebles/models-inmuebles.component';
import { ModelsUserComponent } from './models/models-user/models-user.component';
import { ModelsownerComponent } from './models/modelsowner/modelsowner.component';
import { IonicModule } from '@ionic/angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    SmallmapComponent,
    ModelsDetailsInmuebleComponent,
    ModelsInmueblesComponent,
    ModelsUserComponent,
    ModelsownerComponent,
    ToolbarComponent,


  ],
  imports: [
    CommonModule,
    IonicModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    SmallmapComponent,
    ModelsDetailsInmuebleComponent,
    ModelsInmueblesComponent,
    ModelsUserComponent,
    ModelsownerComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
