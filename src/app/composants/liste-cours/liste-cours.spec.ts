import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeCours } from './liste-cours';

describe('ListeCours', () => {
  let component: ListeCours;
  let fixture: ComponentFixture<ListeCours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCours],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeCours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class ListeCoursComponent {
 cours = [
 { titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 8 },
 { titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h',
places: 15 },
 { titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 6
},
 { titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h',
places: 20 },
 ];
}