import { Telefone } from './telefone';
import { Endereco } from './endereco';

export class PessoaFisica {
    public id: number;
    public nome: string;
    public cpf: string;
    public email: string;
    public data_nascimento: string;
    public data_cadastro: string;
    public telefones : Telefone[];
    public enderecos: Endereco[];
}
