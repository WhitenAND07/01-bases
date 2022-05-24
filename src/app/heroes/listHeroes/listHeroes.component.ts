import { Component } from '@angular/core';

@Component({
  selector: 'app-listHeroes',
  templateUrl: './listHeroes.component.html'
})
export class ListHeroesComponent {
  public heroes: string[] = ['SpiderMan', 'IronMan', 'Thor', 'Capitan America', 'Hulk'];
  public heroeBorrado: string = '';

  borrarLastHeroe(): void{
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
