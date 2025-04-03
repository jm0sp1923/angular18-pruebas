import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy {
  ngOnInit(): void {
    this.headerServices.titulo.set ('Home');
    this.headerServices.extendido.set (true);
  }

  ngOnDestroy(): void {
    this.headerServices.extendido.set (false);
  }

   headerServices = inject(HeaderService);

}
