import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-tarjeta-articulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-articulo.component.html',
  styleUrl: './tarjeta-articulo.component.scss'
})
export class TarjetaArticuloComponent {

  @Input({required:true}) producto!:Producto ;

}
