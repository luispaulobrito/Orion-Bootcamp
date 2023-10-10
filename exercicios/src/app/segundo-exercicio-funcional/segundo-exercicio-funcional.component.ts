import { Component } from '@angular/core';
import { Pessoa } from '../domains/pessoa';

@Component({
  selector: 'app-segundo-exercicio-funcional',
  templateUrl: './segundo-exercicio-funcional.component.html',
  styleUrls: ['./segundo-exercicio-funcional.component.css']
})
export class SegundoExercicioFuncionalComponent {
  lista: Pessoa[] = [];
  bio: string = '';
  nome: string = '';
 
  ngOnInit() {
    this.setListaPessoa();
  }
  
  private setListaPessoa() {
    const pessoa1 = new Pessoa(1, "Ada Lovelace", "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina");
    
    const pessoa2 = new Pessoa(2, "Alan Turing", "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial");
    
    const pessoa3 = new Pessoa(3, "Nikola Tesla", "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.");
    
    const pessoa4 = new Pessoa(4, "Nicolau Copérnico", "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.");
    
    this.lista.push(pessoa1, pessoa2, pessoa3, pessoa4);
  }

  private findItemById(id: number): Pessoa | undefined {
    return this.lista.find(item => item.id === id);
  }
  
  buscarBio(id: number): string {
    const item = this.findItemById(id);
    return item ? item.bio : 'Digite outro número';
  }
  
  buscarNome(id: number): string {
    const item = this.findItemById(id);
    return item ? item.nome : 'Digite outro número';
  }
  
  removerPessoa(id: number): void {
    this.lista = this.lista.filter(item => item.id !== id);
  }
  
  alterarPessoa(id: number, novoNome: string, novaBio: string): void {
    const pessoa = this.findItemById(id);
    if (pessoa) {
      if (this.isStringValid(novoNome)) {
        pessoa.nome = novoNome;
      }
      if (this.isStringValid(novaBio)) {
        pessoa.bio = novaBio;
      }
    }
  }
  
  isStringValid(value: string){
    return value !== null && value?.trim() !== '';
  }
}