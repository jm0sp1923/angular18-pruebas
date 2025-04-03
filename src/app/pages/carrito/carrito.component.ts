import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent{
    ngOnInit(): void {
      this.headerServices.titulo.set ('Carrito');
    }
  
     headerServices = inject(HeaderService);
}
