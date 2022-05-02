//! "Función fábrica" o "gunción constructora":

// Tenemos un "molde" y sacamos muchos similares:

const autos = (ruedas, cambios, inteligente, combustible) => {
    return {
        ruedas,
        cambios,
        inteligente,
        combustible,
        arrancar: function () {
            console.log('Brum, brumm');
        }
    }
}

// Ahora, a hacer una fábrica de autos:

const audi = autos(3, 'manual', true, 'nafta')
console.log(audi);
console.log(audi.arrancar());

const tesla = autos(4, 'automático', true, 'electricidad')
console.log(tesla);
console.log(tesla.arrancar());

// Si falta un "campo", va a tirar "undefined". Si sobra, simplemente lo ignora.
const ferrari = autos(6, 'automático', true, 'nafta', true)
console.log(ferrari);
console.log(ferrari.arrancar());