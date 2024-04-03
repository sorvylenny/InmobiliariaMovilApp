import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NavController } from "@ionic/angular";
import { User } from "src/app/interfaces/user";
import { AuthService } from "src/app/services/auth.service";
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  @Output() backClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() goToLoginClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggleMenuClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() closeSesionClicked: EventEmitter<void> = new EventEmitter<void>();
  username: string = "";
  rolesUser: string[] = [];

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) {}

  ngOnInit(): void {
     this.authService.user$.subscribe(async (user: User | null) => {
      if (user) {
        this.username = user.username;
        this.rolesUser = user.roles;
        await this.storage.get('roles');
        await this.storage.get('username');
        console.log('user:',this.rolesUser);
        console.log('username:',this.username);
      } else {
        this.username = "";
        this.rolesUser = [];
      }
    });
  }

  isLoggedIn(): boolean {
    return !!this.username && !!this.rolesUser;
  }

  closeSesion() {
    this.closeSesionClicked.emit();
  }
  back() {
    this.backClicked.emit();
  }
  goToIn() {
    this.goToLoginClicked.emit();
  }
  toggleMenu() {
    this.toggleMenuClicked.emit();
  }
}
