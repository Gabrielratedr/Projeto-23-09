import { Banco } from "./banco";

export class Pessoa1 extends Banco {
    conta: string;
    agencia: string;
    digitoVerificador: number;
    tipoDeConta: string;
    quantidadeTransferir: number;

constructor (
    conta: string,
    agencia: string,
    digitoVerificador: number,
    tipoDeConta: string,
    nome: string,
    cpf: string,
    rg: string,
    quantidadeTransferir: number,
    saldo: number
    
) {
    super (nome, cpf, rg, saldo);
    this.conta = conta;
    this.agencia = agencia;
    this.digitoVerificador = digitoVerificador;
    this.tipoDeConta = tipoDeConta;
    this.quantidadeTransferir = quantidadeTransferir;
}
verSaldo(){
    console.log(`\nAntônio:`);
    console.log(`O seu saldo é de R$ ${this.saldo}`);
}
valorTransferir(){
    console.log(`O valor transferido foi de R$ ${this.quantidadeTransferir}`);
}
verDados () {
    console.log (`\nNome: ${this.nome}.\nCPF: ${this.cpf}.\nRG: ${this.rg}.\nConta: ${this.conta}.`);
}
}
