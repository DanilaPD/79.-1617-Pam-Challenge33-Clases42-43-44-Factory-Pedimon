// Entre "factory" y "classes":

function Auto(ruedas, cambios, inteligente, combustible) {
    this.ruedas = ruedas
    this.cambios = cambios
    this.inteligente = inteligente
    this.combustible = combustible
    this.arrancar = function () {
        console.log('Brum, brumm');
    }
}

const suzuki = new Auto(4, 'manuales', false, 'nafta')
console.log(suzuki);
console.log(suzuki.arrancar());