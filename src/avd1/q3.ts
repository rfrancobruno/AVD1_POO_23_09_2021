
/*
    Crie uma classe de Funcionários com os atributos nome, salario hora, dias trabalhados, total de faltas no ano.
    Crie os getters e setters.
    Crie um método para calcular o salário bruto que será a multiplicação do salario hora pelas horas trabalhadas.
    Crie um método para calcular a PLR. 
      Se o numero de faltas for igual a zero a PLR será igual ao salário bruto. 
      Se o número de faltas for igual a 1 a PLR será 94% do salário bruto. 
      Se o número de faltas for igual a 2 a PLR será 92% do salário bruto.
      Se o número de faltas for igual a 3 a PLR será 90% do salário bruto. 
      Se o número de faltas for igual a 4 a PLR será 88% do salário bruto.
      Se o número de faltas for maior ou igual a 5 a PLR será zero.
    Crie um método para calcular o desconto que será 5% do salário bruto.
    Crie um método para calcular o salário liquido. Salario bruto - desconto + PLR.
    Imprima as seguintes mensagens
    O funcionário de nome xx tem o salário bruto de 999, teve 99 falta(s) e sua PLR foi de 999.
    O funcionário de nome xx tem o salário bruto de 999, o desconto de 999, a PLR de 999 e o salário líquido de 9999.
*/

class Funcionarios {
    
    constructor(
        public _nome: string,
        public _salarioHora: number,
        public _horasTrabalhadas: number,
        public _totalDeFaltasNoAno: number
    ) {}

    get nome() {
        return this._nome;
    }

    get salarioHora() {
        return this._salarioHora;
    }

    get horasTrabalhadas() {
        return this._horasTrabalhadas;
    }

    get totalDeFaltasNoAno() {
        return this._totalDeFaltasNoAno;
    }

    set nome(nome:string){
       this._nome = nome;
    }

    set salarioHora(salarioHora:number) {
        this._salarioHora = salarioHora;
    }

    set horasTrabalhadas(horasTrabalhadas:number) {
        this._horasTrabalhadas = horasTrabalhadas;
    }

    set totalDeFaltasNoAno(totalDeFaltasNoAno:number) {
        this._totalDeFaltasNoAno = totalDeFaltasNoAno;
    }

    public salarioBruto() {
        return funcionario.salarioHora * funcionario.horasTrabalhadas 
    }

    public plr() {
        if (funcionario.totalDeFaltasNoAno === 0) {
            return this.salarioBruto() 
        }else if (funcionario.totalDeFaltasNoAno === 1) {
           return this.salarioBruto() - this.salarioBruto() * 0.06
        }else if (funcionario.totalDeFaltasNoAno === 2) {
           return this.salarioBruto() - this.salarioBruto() * 0.08
        }else if (funcionario.totalDeFaltasNoAno === 3) {
           return this.salarioBruto() - this.salarioBruto() * 0.10
        }else if (funcionario.totalDeFaltasNoAno === 4) {
           return this.salarioBruto() - this.salarioBruto() * 0.12
        }else {
            return 0
        }
    }

    public desconto() {
        return this.salarioBruto() * 0.05
    }

    public salarioLiquido() {
        return this.salarioBruto() - this.desconto() + this.plr()
    }
}
const funcionario = new Funcionarios('Rodrigo',10 ,2000 , 0)

console.log()
console.log(`FUNCIONARIO: ${funcionario.nome.toUpperCase()} `)
console.log()
console.log(funcionario)
console.log()
console.log(`O funcionário ${funcionario.nome.toUpperCase()}, salário bruto R$ ${funcionario.salarioBruto().toFixed(2)}, teve ${funcionario.totalDeFaltasNoAno} falta(s) e sua PLR foi R$ ${funcionario.plr().toFixed(2)} .`)
console.log(`O funcionário ${funcionario.nome.toUpperCase()} tem o salário bruto de R$ ${funcionario.salarioBruto().toFixed(2)}, o desconto de R$ ${funcionario.desconto().toFixed(2)}, a PLR de R$ ${funcionario.plr().toFixed(2)} e o salário líquido R$ ${funcionario.salarioLiquido().toFixed(2)} .`)
console.log()