export abstract class  Banco {
    nome: string;
    cpf: string;
    rg: string;
    saldo: number;

constructor (
    nome: string,
    cpf: string,
    rg: string,
    saldo: number
) {
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.saldo = saldo;
}
verSaldo (): void {};
transferencia (): void {};
oferecerCartao(): void {};
oferecerSeguro (): void {};
oferecerOdonto (): void {};
verDados (): void {};
verContato():void{};
}
