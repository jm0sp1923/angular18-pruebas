import { Component, effect, inject,signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    headerServices = inject(HeaderService);
    claseAplicada = signal('');
    tituloMostrado = signal('');
    esconderTitulo = effect(() => {
        if(this.headerServices.titulo()){
            this.claseAplicada.set('fade-out');
        }
            
    },{allowSignalWrites: true});

    mostrarTituloNuevo(e:AnimationEvent){
      if(e.animationName.includes('fade-out')){
        this.tituloMostrado.set(this.headerServices.titulo());
        this.claseAplicada.set('fade-in');
        setTimeout(() => this.claseAplicada.set(''), 250);
    }
  }
}
