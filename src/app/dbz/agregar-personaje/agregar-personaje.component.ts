import { Component, Input } from '@angular/core';
import { SubscribableOrPromise } from 'rxjs';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html'
})
export class AgregarPersonajeComponent {

  @Input() personajes: Personaje[] = [];
  
  @Input() personajeNuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(): void {
    if(this.personajeNuevo.nombre.trim().length === 0){ return}
      
    this.personajes.push(this.personajeNuevo);
    
    this.personajeNuevo = {
      nombre: '',
      poder: 0
    }
  }
}
