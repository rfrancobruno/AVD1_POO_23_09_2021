
/*
 1) Crie uma classe com os atributos produto, preço, quantidade
    Crie os métodos getters e setters.
    Crie validação para não aceitar nome em branco, preco e quantidade com valor 0 (zero). 
    Considerando quesão oferecidos descontos pelo número de quantidade comprada, seguindo a tabela abaixo:
    a. Até 10 unidades: não tem desconto
    b. de 11 a 20 unidades: 10% de desconto
    c. de 21 a 50 unidades: 20% de desconto
    d. acima de 50 unidades: 25% de desconto
    Imprima a seguinte mensagem:
    O produto xxx de preço 999, quantidade comprada de 999 teve o desconto de 999 e o valor pago foi de 99999.
*/

class Compras {
    
    constructor(
        public _produto: string,
        public _preco: number,
        public _quantidade: number
    ) {}

    get produto() {
        return this._produto;
    }

    get preco() {
        return this._preco;
    }

    get quantidade() {
        return this._quantidade;
    }

    set produto(produto:string){
        if(produto.length === 0) {
            throw new Error('ATENÇAO! CAMPO PRODUTO VAZIO!!! '); 
        }
       this._produto = produto;
    }

    set preco(preco:number) {
        if(preco <= 0) {
            throw new Error('ERRO! COLOQUE UM PREÇO MAIOR QUE ZERO! '); 
        } 
        this._preco = preco;
    }

    set quantidade(quantidade:number) {
        if(quantidade <= 0 ) {
            throw new Error('ERRO! COLOQUE UMA QUANTIDADE MAIOR QUE ZERO!'); 
        }
        this._quantidade = quantidade;
    }

    public desconto() {
        if (compra.quantidade <= 10) {
            return 0
       }else if (compra.quantidade >= 11 && compra.quantidade <= 20) {
           return 10
       }else if (compra.quantidade >= 21 && compra.quantidade <= 50) {
           return 20
       }else {
           return 25
       }
    }

    public valorPago() {
        if (compra.quantidade <= 10) {
            return compra._preco 
       }else if (compra.quantidade >= 11 && compra.quantidade <= 20) {
           return compra._preco - compra._preco * 0.10
       }else if (compra.quantidade >= 21 && compra.quantidade <= 50) {
           return compra._preco - compra._preco * 0.20
       }else {
           return compra._preco - compra._preco * 0.25
       }
    }


}
const compra = new Compras('', 0, 0)

try {

    console.log()
    console.log(' ------ COMPRAS E DESCONTOS ------ ')
    console.log()
    compra.produto = 'Refrigerante'
    compra.preco = 10
    compra.quantidade = 20
    console.log(compra)
    console.log()
    console.log(`O produto ${compra.produto.toUpperCase()} de preço R$ ${compra.preco.toFixed(2)}, quantidade ${compra.quantidade}, teve o desconto de  ${compra.desconto().toFixed(2)} % e o valor pago foi R$ ${compra.valorPago().toFixed(2)} `) 
    console.log()

} 
catch (err: any) {
    console.error(err.message)
    console.log()
}
