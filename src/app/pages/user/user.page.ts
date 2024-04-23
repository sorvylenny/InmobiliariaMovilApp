import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../shared/alert.service';
import { ModelsUserComponent } from '../../shared/models/models-user/models-user.component';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit, AfterViewInit {

  ColumnsTable: string [] =['username', 'rol', 'estado', 'acciones'];
  dataInit: User[]=[];
  dataListUser = new MatTableDataSource (this.dataInit);
  @ViewChild(MatPaginator) paginatorTable! : MatPaginator;


  constructor(private dialog: MatDialog,
              private router: Router,
              private authService: AuthService,
              private alertService: AlertService,
              private navCtrl: NavController ) { }

  obtenerUsers() {
    this.authService.getAllUser().subscribe({
      next: (data: User[]) => {

        if (data && data.length > 0) {
          this.dataListUser.data = data;
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
    this.obtenerUsers();
  }

  ngAfterViewInit(): void {
    this.dataListUser.paginator = this.paginatorTable;
  }

  appSearchTable(event: Event){
    const searchValue = (event.target as HTMLInputElement).value;
    this.dataListUser.filter = searchValue.trim().toLocaleLowerCase();
    console.log(this.dataListUser);
  }

  newUser(){
    this.dialog.open(ModelsUserComponent, {
      width: '400px',
      disableClose:true
    }).afterClosed().subscribe(res =>{
      if(res ==="true") this.obtenerUsers();
    });
  }

  editUser(user:User){
    console.log(user)
    this.dialog.open(ModelsUserComponent, {
      width: '400px',
      disableClose:true,
      data: user
    }).afterClosed().subscribe(res =>{
      if(res ==="true") this.obtenerUsers();
    });
  }
  userDetails(id: string){
    this.router.navigate(['/user-details', id]);
  }
  close(){
    this.authService.logout();
    this.navCtrl.navigateForward(["/login"]);
  }

}
