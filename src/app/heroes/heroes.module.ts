import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'

import { HeroeComponent } from './heroe/heroe.component';
import { ListHeroesComponent } from './listHeroes/listHeroes.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListHeroesComponent
    ],
    exports:[
        ListHeroesComponent
    ],
    imports:[
        CommonModule //Necessario importar para poder trabajar con ngFor & ngIf-else
    ]
})
export class HeroesModule {}