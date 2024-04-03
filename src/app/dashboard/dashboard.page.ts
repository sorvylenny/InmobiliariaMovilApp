import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../interfaces/dashboard';
import { InmueblesService } from '../services/inmuebles.service';
import { Chart, registerables } from 'chart.js';
import { CityResponse } from '../interfaces/city-response';
import { DepartmentResponse } from '../interfaces/department-response';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  cities: Dashboard[] = [];
  departments: Dashboard[] = [];

  constructor(private inmubleService: InmueblesService,
    private navCtrl: NavController,
    private authService: AuthService,
    private menuController: MenuController) { }
  ngOnInit(): void {
    this.citiesDashboard();
    this.departmentDashboard();
  }

  departmentDashboard() {
    this.inmubleService.dashBoardDepartment().subscribe((response: DepartmentResponse) => {
      this.departments = response.getDepartmentsMoreRegistered;
    });
  }

  citiesDashboard() {
    this.inmubleService.dashBoardCities().subscribe((response: CityResponse) => {
      this.cities = response.getCitiesMoreRegistered;
      const labels = this.cities.map(item => item._id);
      const totals = this.cities.map(item => item.total);
      this.mostrarGrafico(labels,totals); // Puedes pasar this.cities a la función mostrarGrafico si es necesario
    });
  }
  mostrarGrafico(labelGrafico:any[], dataGrafico:any[]){
    const chartBarras= new Chart('chartBarras',{
      type:'bar',
      data:{
       labels: labelGrafico,
       datasets:[{
        label:"Total de inmuebles por ciudad",
        data:dataGrafico,
        backgroundColor:['rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'],
        borderColor:['rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'],
        borderWidth:1
       }]
      },
      options:{
        maintainAspectRatio:false,
        responsive:true,
        scales:{
          y:{
            beginAtZero: true,
          }
        }
      }
    });
  }
  close(){
    this.authService.logout();
    this.navCtrl.navigateForward(["/login"]);
  }
}
