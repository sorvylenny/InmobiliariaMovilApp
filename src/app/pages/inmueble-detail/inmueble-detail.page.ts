import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { Inmueble } from 'src/app/interfaces/inmueble';

@Component({
  selector: 'app-inmueble-detail',
  templateUrl: './inmueble-detail.page.html',
  styleUrls: ['./inmueble-detail.page.scss'],
})
export class InmuebleDetailPage implements OnInit  {
  propiety!: Inmueble;

  constructor(private navCtrl: NavController,
    private inmuebleService: InmueblesService,
    private activerouter: ActivatedRoute) { }
  ngOnInit(): void {
    let inmueble : any = this.activerouter.snapshot.paramMap.get('id')
    this.inmueblesDetail (inmueble);

  }

  goToback(){
    this.navCtrl.navigateBack('/home');
  }
  inmueblesDetail(id: string) {
    this.inmuebleService.getInmuebleById(id).subscribe(propiety => {
      this.propiety = propiety;
      console.log(propiety)
    });
  }

}
