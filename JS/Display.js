class Display{
    //Display elements
    constructor(displayValor1, displayValor2){
        this.displayValor1 = displayValor1;
        this.displayValor2 = displayValor2;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.valor1 = '';
        this.valor2 = '';
        this.sings = {
            addition: '+',
            division: '/',
            multiplication: 'X',
            substraction: '-'
        };
    }

    //Button methods
    deleteNumbers(){
        this.valor2 = this.valor2.toString().slice(0,-1);
        this.printValues();
    }

    clearAll() {
        this.valor2 = '';
        this.valor1 = '';
        this,this.typeOperation = undefined;
        this.printValues();
    }

    addNumber(number) {
        if(number === '.' && this.valor2.includes('.')){
            return
        }
        this.valor2 = this.valor2.toString() + number.toString();
        this.printValues();
    }

    calculate() {
        const valor1 = parseFloat(this.valor1);
        const valor2 = parseFloat(this.valor2);

        if( isNaN(valor2) || isNaN(valor1)) return
        this.valor2 = this.calculator[this.typeOperation](valor1, valor2);
    }

    //Method for printing values on display
    printValues() {
        this.displayValor2.textContent = this.valor2;
        this.displayValor1.textContent = `${this.valor1} ${this.sings[this.typeOperation] || ''}`;
    }

    //Method computar values
    computar(tipo) {
        this.typeOperation !== 'igual' && this.calculate();
        this.typeOperation = tipo;
        this.valor1 = this.valor2 || this.valor1;
        this.valor2 = '';
        this.printValues();
    }
}