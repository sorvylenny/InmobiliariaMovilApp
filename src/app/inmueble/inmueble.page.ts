import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Inmueble } from '../interfaces/inmueble';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InmueblesService } from '../services/inmuebles.service';
import { AlertService } from '../shared/alert.service';
import { ModelsDetailsInmuebleComponent } from '../shared/models/models-details-inmueble/models-details-inmueble.component';
import { AuthService } from '../services/auth.service';
import { AlertController,  NavController } from '@ionic/angular';
import { ModelsInmueblesComponent } from '../shared/models/models-inmuebles/models-inmuebles.component';



@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.page.html',
  styleUrls: ['./inmueble.page.scss'],
})
export class InmueblePage implements OnInit, AfterViewInit {

  ColumnsTable: string [] =['_id','title', 'department', 'actions'];
  dataInit:   Inmueble[]=[];
  dataListProperty = new MatTableDataSource (this.dataInit);
  @ViewChild(MatPaginator) paginatorTable! : MatPaginator;
  isAdmin : boolean = false;

  constructor(private dialog: MatDialog,
              private inmuebleService: InmueblesService,
              private alertService: AlertService,
              private authService: AuthService,
              private navCtrl: NavController,
              private alertController: AlertController){}
  getProperties() {
    this.inmuebleService.allInmuebles().subscribe({
      next: (data: Inmueble[]) => {
        // Verificar si se recibió una respuesta válida
        if (data && data.length > 0) {
          this.dataListProperty.data = data;
        } else {
          this.alertService.Alert("No se encontraron usuarios", "Ha ocurrido un error");
        }
      },
      error: (error) => {
        console.error("Error al obtener usuarios:", error);
        this.alertService.Alert("Error al obtener usuarios", "Ha ocurrido un error");
      }
    });
  }

  ngOnInit(): void {
    this.getProperties();
    this.checkUserRole();
  }
  ngAfterViewInit(): void {
    this.dataListProperty.paginator = this.paginatorTable;
  }

  appSearchTable(event: Event){
    const searchValue = (event.target as HTMLInputElement).value;
    this.dataListProperty.filter = searchValue.trim().toLocaleLowerCase();
  }

  newPropiety(){
    console.log('newPropiety')
    this.dialog.open(ModelsInmueblesComponent, {
      width: '400px',
      disableClose:true
    }).afterClosed().subscribe(res =>{
      if(res ==="true") this.getProperties();
    });
  }
  editPropiety(inmuebles:Inmueble){
    console.log(inmuebles)
    this.dialog.open(ModelsInmueblesComponent, {
      width: '400px',
      disableClose:true,
      data: inmuebles
    }).afterClosed().subscribe(res =>{
      if(res ==="true") this.getProperties();
    });
  }
  async deleteInmueble(propiety: Inmueble) {
    const alert = await this.alertController.create({
      header: 'Eliminar Propiedad',
      message: `¿Estás seguro de eliminar la propiedad ID:"${propiety.numberRef}" Titulo:"${propiety.title}" ?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Operación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.inmuebleService.deleteInmuebleById(propiety._id!).subscribe({
              next: (res) => {
                if (res) {
                  this.alertService.Alert("El Inmueble fue eliminado", "Great!");
                  this.getProperties();
                } else {
                  this.alertService.Alert("No se pudo eliminar el Inmueble", "¡Error!");
                }
              },
              error: () => { }
            });
          }
        }
      ]
    });

    await alert.present();
  }

  openDetallesInmuebleModal(inmuebles:Inmueble) {
    this.dialog.open(ModelsDetailsInmuebleComponent, {
      width: '400px',
      disableClose:true,
      data: inmuebles
    }).afterClosed().subscribe(res =>{
      if(res ==="true") this.getProperties();
    });
  }
  checkUserRole() {
    const roles = localStorage.getItem('roles');
    this.isAdmin = typeof roles === 'string' && roles.includes('admin');
  }


  close(){
    this.authService.logout();
    this.navCtrl.navigateForward(["/login"]);
  }


}
