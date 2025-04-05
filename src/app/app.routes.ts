import { Routes } from '@angular/router';
import { CarritoComponent } from '../app/pages/carrito/carrito.component';
import { BuscarComponent } from '../app/pages/buscar/buscar.component';
import { RubroComponent } from './pages/rubro/rubro.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'carrito',
        component: CarritoComponent
    },
    {
        path: 'buscar',
        component: BuscarComponent
    },
    {
        path: 'categoria/:id',
        component: RubroComponent
    }
    ,
    {
        path: 'articulo/:id',
        component: ArticuloComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent
    },
    {
        path: '',
        component: HomeComponent
    }

];

