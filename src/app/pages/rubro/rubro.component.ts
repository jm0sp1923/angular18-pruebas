import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../core/interfaces/producto';
import { TarjetaArticuloComponent } from '../../core/components/tarjeta-articulo/tarjeta-articulo.component';
import { CategoriasService } from '../../core/services/categorias.service';

@Component({
  selector: 'app-rubro',
  standalone: true,
  imports: [CommonModule,TarjetaArticuloComponent,RouterModule],
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.css',
})
export class RubroComponent {
  headerServices = inject(HeaderService);
  CategoriaServices = inject(CategoriasService);
  route = inject(ActivatedRoute); // <- CORRECTO

  productos: Producto[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      if (res['id']) {
        this.CategoriaServices
          .getById(parseInt(res['id']))
          .then(Categoria => {
            if(Categoria) {this.productos = Categoria.productos;
              this.headerServices.titulo.set(Categoria.nombre);
            }
            
          });
      }
    });
  }
}
