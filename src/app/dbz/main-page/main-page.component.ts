import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 700
    },
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  public personajeNuevo: Personaje = {
    nombre:'',
    poder: 0 
  };

  agregarNuevoPersonaje(personajeInput: Personaje){
    
    this.personajes.push(personajeInput);
    
    this.personajeNuevo = {
      nombre: '',
      poder: 0
    };
  }
}
