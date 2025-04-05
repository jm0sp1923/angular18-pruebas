import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../core/services/header.service';
import { CategoriasService } from '../../core/services/categorias.service';
import { Categoria } from '../../core/interfaces/categoria';
import { TarjetaCategoriaComponent } from '../../core/components/tarjeta-categoria/tarjeta-categoria.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TarjetaCategoriaComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,OnDestroy {

  headServices = inject(HeaderService);
  categoriasService = inject(CategoriasService);
  categorias:Categoria[] = [];
  
  ngOnInit(): void {
    this.headerServices.titulo.set ('Home');
    this.headerServices.extendido.set (true);
    this.categoriasService.getAll().then(res => {this.categorias = res});
  }

  ngOnDestroy(): void {
    this.headerServices.extendido.set (false);
  }

   headerServices = inject(HeaderService);

}
