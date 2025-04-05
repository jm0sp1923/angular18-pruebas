import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../core/services/productos.service';
import { Producto } from '../../core/interfaces/producto';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.scss'
})
export class ArticuloComponent {
  
  headerServices = inject(HeaderService);
  productosServices = inject(ProductosService);


  producto: Producto|undefined;

  constructor(private ac:ActivatedRoute) {
    ac.params.subscribe((params) => {
      if(params['id']) {
        this.productosServices.getById(params['id']).then(producto => {
          this.producto = producto;
          this.headerServices.titulo.set (producto!.nombre);
        })
      }
    })
   }
  
  ngOnInit(): void {
    this.headerServices.titulo.set ('Articulo');
  }


}
