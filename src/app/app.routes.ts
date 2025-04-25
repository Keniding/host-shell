import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {NotFoundComponent} from './page/not-found/not-found.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full',
  // },

  // {
  //   path: '',
  //   loadComponent: () =>
  //     loadRemoteModule('mfe-header', './Component')
  //       .then((module) => module.component),
  // },

  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('mfe-header', './Component')
        .then(m => m.AppComponent),
  },

  {
    path: '**',
    component: NotFoundComponent,
  }
];
