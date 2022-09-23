import { Banco } from "./banco";


export class Pessoa2 extends Banco {
    conta: string;
    agencia: string;
    digitoVerificador: number;
    tipoDeConta: string;
    receber: number;
constructor (
    conta: string,
    agencia: string,
    digitoVerificador: number,
    tipoDeConta: string,
    nome: string,
    cpf: string,
    rg: string,
    saldo: number,
    receber: number
) {
    super (nome, cpf, rg, saldo);
    this.conta = conta;
    this.agencia = agencia;
    this.digitoVerificador = digitoVerificador;
    this.tipoDeConta = tipoDeConta;
    this.receber = receber;
}
reeceber(){
    console.log(`O valor recebido foi de: R$ ${this.receber}`);
}

verSaldo(){
    console.log(`Jorge:`)
    console.log(`O seu saldo é de: ${this.saldo}`);
}
verDados () {
    console.log (`\nNome: ${this.nome}.\nCPF: ${this.cpf}.\nRG: ${this.rg}.\nConta: ${this.conta}.`);
}
}
