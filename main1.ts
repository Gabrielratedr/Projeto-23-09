import { Pessoa1 } from "./Banco/pessoa1";
import { Pessoa2 } from "./Banco/pessoa2";
import { Servicos } from "./Banco/servicos";

let pessoaUm = new Pessoa1 ("12312312", "1234", 9, "013", "Antônio", "123.123.123-12", "12.123.123-0", 100, 500);
let pessoaDois = new Pessoa2 ("32132132", "4321", 8, "013", "Jorge", "321.321.321-32", "32.321.321-0", 400, 100);

// Área de uso interno do banco para ver dados dos clientes:
pessoaUm.verDados ();
pessoaDois.verDados ();

// Interface do usuário do banco que acabou de enviar um PIX:
pessoaUm.verSaldo();
pessoaUm.valorTransferir();
let resultado = (saldo: number, quantidadeTransferir: number) => saldo - quantidadeTransferir;
console.log("O seu saldo ATUAL agora é de R$ " + resultado(500,100));
let extrato = ["TRANSFÊRENCIA PIX DE ANTÔNIO PARA JORGE NO VALOR DE R$ 100,00 REALIZADA COM SUCESSO!\n"];
console.log(extrato[0]);

// Interface do usuário do banco que acabou de receber um PIX:
console.log ("\nVOCÊ RECEBEU UM PIX!");
pessoaDois.verSaldo();
pessoaDois.reeceber();
let resultado2 = (saldo2: number, quantidadeTransferir: number) => saldo2 + quantidadeTransferir
console.log("Agora seu Saldo Atual é de: " + resultado2(400,100)+"");

// Área de uso interno do banco para oferecer serviços de acordo com o perfil do cliente:
let servicosUm = new Servicos ("Antônio", "123.123.123-12", "12312312", 500, 3590,35,"antonio@email.com");
servicosUm.verContato();
servicosUm.oferecerCartao ();
servicosUm.oferecerSeguro ();
servicosUm.oferecerOdonto ();
