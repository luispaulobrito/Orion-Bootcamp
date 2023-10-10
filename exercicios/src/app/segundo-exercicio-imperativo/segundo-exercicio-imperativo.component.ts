import { Component } from '@angular/core';
import { Pessoa } from '../domains/pessoa';
import { TipoAlteracaoEnum } from '../enum/tipo-alteracao.enum';

@Component({
  selector: 'app-segundo-exercicio-imperativo',
  templateUrl: './segundo-exercicio-imperativo.component.html',
  styleUrls: ['./segundo-exercicio-imperativo.component.css']
})
export class SegundoExercicioImperativoComponent {
  lista: Pessoa[] = [];
  idBuscaBio: number = 0;
  idBuscaNome: number = 0;
  idRemovePessoa: number = 0;
  idAlteracao: number = 0;
  bio: string = '';
  nome: string = '';
  itemRemovido: string = '';
  tipoAlteracao: TipoAlteracaoEnum = TipoAlteracaoEnum.BIO;
  novoValor: string = '';
  mensagemAlteracao: string = '';
  TipoAlteracaoEnum = TipoAlteracaoEnum;

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
  
  buscarBio(id: number): void {
    const item = this.findItemById(id);
    this.bio = item ? item.bio : 'Digite outro número';
  }
  
  buscarNome(id: number): void {
    const item = this.findItemById(id);
    this.nome = item ? item.nome : 'Digite outro número';
  }
  
  removerPessoa(id: number): void {
    const item = this.findItemById(id);
  
    if (item) {
      this.lista = this.lista.filter(item => item.id !== id);
      this.itemRemovido = `Id ${id} removido com sucesso`;
    } else {
      this.itemRemovido = 'Digite outro número';
    }
  }
  
  alterarPessoa(id: number, novoValor: string, tipoAlteracao: string): void {
    const pessoa = this.findItemById(id);
    if (pessoa) {
      if (tipoAlteracao === TipoAlteracaoEnum.BIO) {
        pessoa.bio = novoValor;
      } else if (tipoAlteracao === TipoAlteracaoEnum.NOME) {
        pessoa.nome = novoValor;
      }
      this.mensagemAlteracao = `${tipoAlteracao.charAt(0).toUpperCase() + tipoAlteracao.slice(1)} do id ${id} alterado.`;
    } else {
      this.mensagemAlteracao = 'Digite outro ID';
    }
  }
  
}
