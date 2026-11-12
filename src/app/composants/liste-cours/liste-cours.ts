import { Component,Output, EventEmitter } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import {TronquerPipe} from '../../pipes/tronquer-pipe';
import { inject } from '@angular/core';
import { Cours } from '../../donnees/cours';
import { RouterLink } from '@angular/router';
import { Catalogue } from '../../services/catalogue';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.html',
  styleUrl: './liste-cours.css', 
  imports:[
    FormsModule, 
    UpperCasePipe, 
    FiltreCoursPipe, 
    TriCoursPipe, 
    PlacesRestantesPipe, 
    TronquerPipe,
    RouterLink
  ]
})

export class ListeCours {
 @Output() coursSelectionne = new EventEmitter<Cours>();
 private catalogue = inject(Catalogue);

 cours: Cours[] = this.catalogue.lister();
 coursActif: Cours | null = null;
 selectionner(c: Cours) {
  this.coursActif = c;
  this.coursSelectionne.emit(c);
 }
 recherche = '';
 tri: 'asc' | 'desc' = 'asc';
 // ... coursActif, coursSelectionne, cours, selectionner() inchangés
 
}

