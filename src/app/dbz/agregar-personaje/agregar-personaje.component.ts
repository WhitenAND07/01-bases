import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html'
})
export class AgregarPersonajeComponent {
  
  @Input() personajeNuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    if(this.personajeNuevo.nombre.trim().length === 0){ return}

    this.onNuevoPersonaje.emit(this.personajeNuevo);
    
    this.personajeNuevo = {
      nombre: '',
      poder: 0
    }
  }
}
