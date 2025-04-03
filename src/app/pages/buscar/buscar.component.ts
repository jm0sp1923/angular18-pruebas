import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
    ngOnInit(): void {
      this.headerServices.titulo.set ('Buscar');
    }
  
     headerServices = inject(HeaderService);
}
