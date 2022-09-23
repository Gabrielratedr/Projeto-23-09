import { Banco } from "./banco";

export class Servicos extends Banco {
    rendaMensal: number;
    idade: number;
    email: string;

    constructor(
        nome: string,
        cpf: string,
        rg: string,
        saldo: number,
        rendaMensal: number,
        idade: number,
        email: string

    ) {
        super(nome, cpf, rg, saldo);
        this.rendaMensal = rendaMensal;
        this.idade = idade;
        this.email = email;
    }
    oferecerCartao() {
        if (this.rendaMensal >= 1500 && this.rendaMensal <= 2499) {
            console.log(`Oferecer cartão nacional.`);
        } else if (this.rendaMensal >= 2500 && this.rendaMensal <= 4999) {
            console.log(`Oferecer cartão Gold Internacional.`);
        } else if (this.rendaMensal >= 5000) {
            console.log(`Oferecer cartão Black Internacional.`);
        }
    }
    oferecerSeguro() {
        if (this.idade > 0 && this.idade >= 65) {
            console.log(`Oferecer seguro de vida.`);
        } else {
            console.log(`Ofercer seguro residencial.`);

        }
    }
    oferecerOdonto() {
        if (this.idade > 0 && this.idade <= 15) {
            console.log(`Oferecer plano Odontológico Start.`);
        } else if (this.idade >= 16 && this.idade <= 64) {
            console.log(`Ofercer plano Odontológico Plus.`);

        } else if (this.idade > 65 && this.idade <= 100) {
            console.log(`Ofercer plano Odontológico Sênior.`);
        }else{
            console.log('Não temos planos odontológicos disponíveis para este cliente.');
        }
    }verContato(){
        console.log('\nEntrar em contato com o cliente ',this.nome,' atavés do e-mail: ',this.email,' e oferecer os seguintes serviços: ')
    }
}
        oferecerOdonto(){
        if(this.idade > 0 && this.idade >=15 ){
            console.log(`Oferecer plano Odontoógico Start.`);
        }else if(this.idade >= 16 && this.idade >=64 ){
            console.log(`Ofercer plano Odontológico Plus.`);
            
         }else if(this.idade >65 && this.idade >=100 ){
         console.log(`Ofercer plano Odontológico Sênior.`);
         }
        }
}
