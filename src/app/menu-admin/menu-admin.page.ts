import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.page.html',
  styleUrls: ['./menu-admin.page.scss'],
})
export class MenuAdminPage implements OnInit {

  username: string = '';
  rolesUser: string[] = [];

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.authService.user$.subscribe((user: User | null) => {
     if (user) {
       this.username = user.username;
       this.rolesUser = user.roles;
     } else {
       this.username = "";
       this.rolesUser = [];
     }
   });
 }

  navigateToPage1() {
    this.navCtrl.navigateForward('/dashboard');
  }
 navigateToPage2() {
    this.navCtrl.navigateForward('/user');
  }
navigateToPage3() {
    this.navCtrl.navigateForward('/inmueble');
  }
 isAdmin(): boolean {
  return this.rolesUser.includes('admin');
}



}
