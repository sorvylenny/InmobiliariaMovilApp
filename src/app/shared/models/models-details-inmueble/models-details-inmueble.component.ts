import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Inmueble } from 'src/app/interfaces/inmueble';
import { Owner } from 'src/app/interfaces/owner';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-models-details-inmueble',
  templateUrl: './models-details-inmueble.component.html',
  styleUrls: ['./models-details-inmueble.component.scss'],
})
export class ModelsDetailsInmuebleComponent  implements OnInit {
  ownerName!: string;
  constructor(private modalsActual: MatDialogRef<ModelsDetailsInmuebleComponent>,
              @Inject(MAT_DIALOG_DATA) public dataInmueble: Inmueble,
              private inmuebleService: InmueblesService,
              private activerouter: ActivatedRoute
    ) { }

    ngOnInit(): void {
      if (this.dataInmueble && this.dataInmueble.ownerId) {
        this.ownerAll(this.dataInmueble.ownerId);
      }
    }

    inmueblesDetail(id: string) {
      this.inmuebleService.getInmuebleById(id).subscribe(propiety => {
        this.dataInmueble = propiety;
        this.modalsActual.close("true");
        console.log(this.dataInmueble)
      });
    }
    ownerAll(ownerId: string) {
      this.inmuebleService.onwerInmuebles().subscribe((owners: Owner[]) => {
        const owner = owners.find(owner => owner._id === ownerId);
        if (owner) {
          this.ownerName = owner.name;
        } else {
          this.ownerName = 'Desconocido';
        }
      }, error => {
        console.error('Error al obtener el propietario:', error);
        this.ownerName = 'Desconocido';
      });
    }

}
