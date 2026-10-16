import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { Cours } from './composants/liste-cours/liste-cours';
import { DetailCours } from './composants/detail-cours/detail-cours';


@Component({
  imports: [
    EnTete,
    ListeCours,
    DetailCours,
    PiedPage,
    
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  coursSelectionne: Cours | null = null;
  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }
  
}
