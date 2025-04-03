import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  //Constructor
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/perfil':
            this.seleccionado = [true, false, false, false];
            break;
          case '/carrito':
            this.seleccionado = [false, true, false, false];
            break;
          case '/buscar':
            this.seleccionado = [false, false, true, false];
            break;
          case '/':
            this.seleccionado = [false, false, false, true];
            break;
          default:
            this.seleccionado = [false, false, false, false];
            break;
        }
      }
    });
  }

  seleccionado = [false, false, false, false];
  desactivado = "#555555"
  activado = "#FFB800";

  navegar(direccion: string) {
    //Cambiar de pagina
    this.router.navigate([direccion]);
    console.log('Navegando a la pagina: ' + direccion);
  }
}
