import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  ngOnInit(): void {
    this.headerServices.titulo.set ('Articulo');
  }

   headerServices = inject(HeaderService);
}
