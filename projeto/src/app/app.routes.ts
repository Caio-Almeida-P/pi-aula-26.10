import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dialogo } from './pages/dialogo/dialogo';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [

    {
        path: 'pages/login',
        component: Login,
        title: 'Página de Login'
    }
    ,
    {
        path: 'pages/registro',
        component: Registro,
        title: 'Página de Registro'
    }
    ,
    {
        path: 'pages/dialogo',
        component: Dialogo,
        title: 'Caixa de Advertência'
    }
];