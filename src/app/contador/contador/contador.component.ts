import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})
export class ContadorComponent{
    public titulo: string = 'Contador APP';
    public contador: number = 10;
    public base: number = 5;
  
    sumar(){
        this.contador +=1;
    }

    restar(){
        this.contador +=-1;
    }

    acumular(valor: number){
        this.contador += valor;
    }
}