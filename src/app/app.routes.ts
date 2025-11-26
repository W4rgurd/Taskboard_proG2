import { Routes } from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {Task} from './task/task';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about',
  loadChildren : () => import('./abouts-page/routes').then(m => m.ABOUTS_ROUTES)},
  { path: 'task',
    loadChildren : () => import('./tasks-page/routes').then(m => m.TASKS_ROUTES)}
];
