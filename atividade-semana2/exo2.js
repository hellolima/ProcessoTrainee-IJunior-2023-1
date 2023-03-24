class Pessoa{
    _nome
    _cpf;
    _dataNascimento;
    _conta = new Conta;

    constructor(nome, cpf, dataNascimento, numero){
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._conta = new Conta(numero);
    }

    getNome(){
        return this._nome;
    }

    sacarDinheiro(valor){
        if(valor > this._conta._saldoCorrente){
            console.log(`Seu saldo eh ${this._conta._saldoCorrente} e nao eh possivel realizar essa operacao!`);
        } else {
            this._conta._saldoCorrente -= valor;
        }
    }

    guardarDinheiro(valor){
        this._conta._saldoCorrente += valor;
    }

    investirDinheiro(valor){
        this._conta._poupanca.saldo = valor + (this._conta._poupanca.saldo * this._conta._poupanca.juros);
    }

}

class Conta{
    _numero;
    _saldoCorrente;
    _poupanca;

    constructor(numero){
        this._numero = numero;
        this._saldoCorrente = 1000;
        this._poupanca = {
            juros : 1.5,
            saldo : 0,
        };

    }

    getNumero(){
        return this._numero;
    }

    getSaldoCorrente(){
        return this._saldoCorrente;
    }

    getSaldoPoupanca(){
        return this._poupanca.saldo;
    }
}

const gabi = new Pessoa("Gabriella", "1234-5678", "03/12/2003", 12345);
console.log(`O saldo inicial da sua conta corrente eh: R$${gabi._conta.getSaldoCorrente()}`);

gabi.sacarDinheiro(200);
console.log(`O saldo da sua conta corrente agora eh: R$${gabi._conta.getSaldoCorrente()}`);

gabi.guardarDinheiro(1);
console.log(`O saldo da sua conta corrente agora eh: R$${gabi._conta.getSaldoCorrente()}`);

gabi.investirDinheiro(50);
gabi.investirDinheiro(10);
console.log(`O saldo da sua poupanca eh: R$${gabi._conta.getSaldoPoupanca()}`);