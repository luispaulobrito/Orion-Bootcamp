import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-exercicio',
  templateUrl: './primeiro-exercicio.component.html',
  styleUrls: ['./primeiro-exercicio.component.css']
})
export class PrimeiroExercicioComponent {
  palavra: string = '';
  vogais: number = 0;

  contarVogais(palavra: string): number {
    const vogais = palavra.toLowerCase().match(/[aeiouáàâãéêíóôõúü]/g);
    return vogais ? vogais.length : 0;
  }

  atualizarContagem(): void {
    this.vogais = this.contarVogais(this.palavra);
  }
}
