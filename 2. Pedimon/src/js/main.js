const totalItems = document.getElementById('totalItems');
const totalProducts = document.getElementById('totalProducts');
const cartWrapper = document.getElementById('cartWrapper');

let products = []; // Al principio, no tenemos productos elegidos.
console.log(products);

//! Ejemplo de un "product":
// {
// product: 'squirtle',
// price: 200,
// count: 1,   
// }

const setCount = () => {
    let totalCount = 0 // Arranca en 0 porque no tiene productos.

    // Recorremos para ver si hay algo en "products":
    for (const i in products) {
        totalCount += products[i].count
    }

    totalItems.innerText = totalCount.toString();
    return totalCount;
};

const totalPrice = () => {
    let totalCart = 0

    for (const i in products) {
        totalCart += products[i].price * products[i].count;
    };
    totalProducts.innerHTML = totalCart.toString();
    return totalCart;
};

const productsList = () => {
    // Agrego el producto al "cart".
    cartWrapper.innerHTML = products.map(product => {
        return `
        <div class="cart-item">
            <div class="cart-item-content">
                <span>${product.product}</span>
                <span>Cantidad deseada: ${product.count}</span>
            </div>
                  <span>$ ${product.price}</span>
        </div>
        `
    })
}

// El único momento en que llamamos esas 3 funciones de arriba es cuando hacemos el "onclick" en los botones.
const addProduct = (product, price, count) => {
    console.log(products);
    for (const i in products) {
        // Chequeo si hay algo:
        if (products[i].product === product) {
            products[i].count++;
            setCount();
            totalPrice();
            productsList();
            return;
        }
    }
    // Si no hay nada, empiezo la lista:
    products.push({
        product,
        price,
        count
    })
    setCount();
    totalPrice();
    productsList();
};