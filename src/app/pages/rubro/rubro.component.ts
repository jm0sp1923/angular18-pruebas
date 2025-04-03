import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-rubro',
  standalone: true,
  imports: [],
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.css'
})
export class RubroComponent {
  ngOnInit(): void {
    this.headerServices.titulo.set ('Rubro');
  }

   headerServices = inject(HeaderService);
}
