import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Blog } from './pages/blog/blog';
import { Proyectos } from './pages/proyectos/proyectos';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'blog',
    component: Blog
  },
  {
    path: 'proyectos',
    component: Proyectos
  },
  {
    path: 'sobre-mi',
    component: SobreMi
  },
  {
    path: 'contacto',
    component: Contacto
  },
  {
    path: '**',
    redirectTo: ''
  }
];