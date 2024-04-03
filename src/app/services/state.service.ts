import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const isLoggedIn = await this.storage.get('isLoggedIn');
    this.isLoggedInSubject.next(isLoggedIn || false);
  }

  async setIsLoggedIn(isLoggedIn: boolean): Promise<void> {
    await this.storage.set('isLoggedIn', isLoggedIn);
    this.isLoggedInSubject.next(isLoggedIn);
  }

  async getIsLoggedInFromStorage(): Promise<boolean> {
    const isLoggedIn = await this.storage.get('isLoggedIn');
    return isLoggedIn || false;
  }
 /*  constructor() { }
  getIsLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  setIsLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedInSubject.next(isLoggedIn);
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }

  getIsLoggedInFromLocalStorage(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn ? JSON.parse(isLoggedIn) : false;
  } */
}
