export class Pessoa{
    id: number = 0;
    nome: string = '';
    bio: string = '';

    constructor(id: number, nome: string, bio: string) {
        this.id = id;
        this.nome = nome;
        this.bio = bio;
    }
}