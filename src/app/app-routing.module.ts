import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

class preloadingStrategy  implements PreloadAllModules {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
      if(route.data && route.data['preload']){
        return fn();
      } else{
        return of(null);
      }
    }
}
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'inmueble-detail/:id',
    loadChildren: () => import('./inmueble-detail/inmueble-detail.module').then( m => m.InmuebleDetailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inmueble',
    loadChildren: () => import('./inmueble/inmueble.module').then( m => m.InmueblePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'user-details/:id',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [preloadingStrategy]
})
export class AppRoutingModule { }
