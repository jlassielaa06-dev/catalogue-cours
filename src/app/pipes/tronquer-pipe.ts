import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tronquer',
  standalone: true,
})
export class TronquerPipe implements PipeTransform {
  transform(valeur: string | null | undefined, longMax: number): string {
    if (valeur == null) {
      return '';
    }

    const texte = String(valeur);

    if (texte.length <= longMax) {
      return texte;
    }

    return texte.slice(0, Math.max(0, longMax)).trimEnd() + '…';
  }
}
