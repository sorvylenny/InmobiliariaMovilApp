import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  userD!: User;
  constructor(private authService: AuthService, private navCtrl: NavController, private activerouter: ActivatedRoute) { }

  ngOnInit(): void {
    let userId : any = this.activerouter.snapshot.paramMap.get('id')
    this.userDetails(userId);
  }

  userDetails(id: string) {
    this.authService.userDetails(id).subscribe(user => {
      this.userD = user;
      console.log(user)
    });
  }
  goBack(){
    this.navCtrl.navigateForward(['/user'])
  }
  close(){
    this.authService.logout();
    this.navCtrl.navigateForward(["/login"]);
  }


}
