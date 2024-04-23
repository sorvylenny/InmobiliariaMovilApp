import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { Login } from '../../interfaces/login';
import { NavController } from '@ionic/angular';
import { AlertService } from '../../shared/alert.service';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { StateService } from '../../services/state.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  formLogin: FormGroup;
  hidePassword: boolean = true;
  showLoading: boolean = false;
  users: User[]=[]
  userSubscription!: Subscription;
  alertController: any;
  loginForm: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private storage: Storage,
    private stateService: StateService
  ) {
    this.formLogin = this.fb.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.loginForm = this.formLogin;
  }

initSesion() {
  this.showLoading = true;

  const request: Login = {
    username: this.formLogin.value.username,
    password: this.formLogin.value.password
  };

  this.authService.initSeccion(request).subscribe(
    success => {
      if (success) {
        const role = localStorage.getItem('roles');
        if (role?.includes('admin')) {
          this.navCtrl.navigateForward(['/dashboard']);
          console.log('admin');
          this.stateService.setIsLoggedIn(true);
          const username = this.formLogin.value.username;
          this.alertService.Alert(`Bienvenido ${username}`, 'success');
          this.loginForm.reset();
          this.showLoading = false;
        } else {
          this.navCtrl.navigateForward(['/inmueble']);
          console.log('empleados');
          this.loginForm.reset();
          this.stateService.setIsLoggedIn(true);
          this.alertService.Alert(`Bienvenido ${request.username}`, 'success');
          this.showLoading = false;
        }
      } else {
        this.showLoading = false;
        this.alertService.Alert('Usuario y/o contraseña inválida.', 'error');
        console.error('Usuario y/o contraseña inválida.');
      }
    }, error => {
      console.error('Error:', error);
    }
  );
}
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  goToBack(){
    this.navCtrl.navigateForward(['/home']);
  }

}
