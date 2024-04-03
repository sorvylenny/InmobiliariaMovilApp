import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Department } from '../interfaces/department';
import { City } from '../interfaces/city';
import { Inmueble } from '../interfaces/inmueble';
import { NavController } from '@ionic/angular';
import { InmueblesService } from '../services/inmuebles.service';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  searchTitle= new FormControl();
  searchDepartmentControl = new FormControl();
  searchCityControl = new FormControl();
  searchPrice = new FormControl();

  departments: Department[] = [];
  cities: City[] = [];
  propiety: Inmueble[]=[];
  inmueblesEncontrados: boolean = false;
  inmueblesSubscription: Subscription | undefined;

  constructor(private navCtrl: NavController, private inmueblesServices: InmueblesService) { }

  ngOnInit() {
    this.allPropiety();
    this.loadAllInmuebles();

    this.searchTitle.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(() => {
      this.search();
    });

    // Escuchar cambios en el campo de búsqueda de departamento
    this.searchDepartmentControl.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(() => {
      this.search();
    });

    // Escuchar cambios en el campo de búsqueda de ciudad
    this.searchCityControl.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(() => {
      this.search();
    });

    // Escuchar cambios en el campo de búsqueda de precio
    this.searchPrice.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(() => {
      this.search();
    });
  }

  search(): void {
    const priceValue = this.searchPrice.value;
  if (priceValue === -1) {
    this.searchPrice.setValue(null);
  }

  const query = {
    title: this.searchTitle.value,
    department: this.searchDepartmentControl.value,
    city: this.searchCityControl.value,
    price: this.searchPrice.value
  };
  console.log(query);


    const allFieldsEmpty = Object.values(query).every(value => value === '');

    if (allFieldsEmpty) {
      this.allPropiety();
    } else {

      this.inmueblesServices.seachInmuebles(query).subscribe((inmuebles: Inmueble[]) => {
        this.propiety = inmuebles;
        console.log("inmuebles:", inmuebles)
        this.inmueblesEncontrados = inmuebles.length > 0 ? true : false;
      });
    }
  }

  allPropiety(){
    this.inmueblesServices.allInmuebles().subscribe(inmuebles => {
      this.propiety = inmuebles;
    });
  }
  propietyDetails(_id: string){
    this.navCtrl.navigateForward(['/inmueble-detail', _id]);
    console.log("id:", _id)
  }
  ngOnDestroy(): void {
    if (this.inmueblesSubscription) {
      this.inmueblesSubscription.unsubscribe();
    }
  }

 loadAllInmuebles(): void {
  this.inmueblesSubscription = this.inmueblesServices.allInmuebles$.subscribe(inmuebles => {
    this.propiety = inmuebles;
    });
  }

  clear(){
    this.searchTitle.setValue('');
    this.searchDepartmentControl.setValue('');
    this.searchCityControl.setValue('');
    this.searchPrice.setValue('');
    this.allPropiety();
  }
  goToIn(){
    this.navCtrl.navigateForward(['/login']);
   }

}
