import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  ngOnInit(): void {
    this.headerServices.titulo.set ('Perfil');
  }

   headerServices = inject(HeaderService);
}
