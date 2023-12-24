let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let firstProduct = [
    {
        id: 1,
        name: 'КОКТЕЙЛИ',
        image: '1.png',
        prices: {
            350: 180,
            400: 210,
        },
        description: 'чашке.',
    }
];

let otherProducts = [
    {
        id: 2,
        name: 'ВЗБИТЫЕ СЛИВКИ',
        image: '2.png',
        price: 60,
        description: 'чашке.',
    },
    {
        id: 3,
        name: 'МАРШМЕЛЛОУ',
        image: '3.png',
        price: 40,
        description: 'вкуса.',
    },
    {
        id: 4,
        name: 'АМАРЕТТО',
        image: '4.png',
        price: 30,
        description: 'удовольствия.',
    },
    {
        id: 5,
        name: 'БАЗИЛИК',
        image: '5.png',
        price: 30,
        description: 'атмосферу.',
    },
    {
        id: 6,
        name: 'БУЗИНА',
        image: '6.png',
        price: 30,
        description: 'нами.',
    },
    {
        id: 7,
        name: 'ВАНИЛЬ',
        image: '7.png',
        price: 30,
        description: 'профессионализмом.',
    },
    {
        id: 8,
        name: 'ВИШНЯ',
        image: '8.png',
        price: 30,
        description: 'наслаждения.',
    },
    {
        id: 9,
        name: 'ГОЛУБИКА',
        image: '9.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 10,
        name: 'БАНАН',
        image: '10.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 11,
        name: 'ИМБИРЬ',
        image: '11.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 12,
        name: 'ИНЖИР',
        image: '12.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 13,
        name: 'ИРЛАНДСКИЙ КРЕМ',
        image: '13.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 14,
        name: 'КАРАМЕЛЬ',
        image: '14.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 15,
        name: 'КАРИБСКИЙ РОМ',
        image: '15.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 16,
        name: 'КЕДРОВЫЙ',
        image: '16.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 17,
        name: 'КОКОС',
        image: '17.png',
        price: 30,
        description: 'наслаждения.',
    },{
        id: 18,
        name: 'КОНЬЯК',
        image: '18.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 19,
        name: 'КРАСНЫЙ АПЕЛЬСИН',
        image: '19.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 20,
        name: 'ЛЕСНОЙ ОРЕХ',
        image: '20.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 21,
        name: 'ЛИМОННЫЙ ПИРОГ',
        image: '21.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 22,
        name: 'МАКАДАМИЯ',
        image: '22.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 23,
        name: 'МАЛИНА',
        image: '23.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 24,
        name: 'МАНГО',
        image: '24.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 25,
        name: 'МАРАКУЙЯ',
        image: '25.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 26,
        name: 'КОЛА',
        image: '26.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 27,
        name: 'ОРЕХОВАЯ НУГА В ШОКОЛАДЕ',
        image: '27.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 28,
        name: 'ОРХИДЕЯ',
        image: '28.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 29,
        name: 'ПЕРСИК',
        image: '29.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 30,
        name: 'ПРЯНЫЕ СПЕЦИИ',
        image: '30.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 31,
        name: 'САХАРНЫЙ ТРОСНИК',
        image: '31.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 32,
        name: 'СИБИРСКАЯ ТАЙГА',
        image: '32.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 33,
        name: 'СИРЕНЬ',
        image: '33.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 34,
        name: 'СОЛЁНАЯ КАРАМЕЛЬ',
        image: '34.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 35,
        name: 'ТАБАК ВАНИЛЬ',
        image: '35.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 36,
        name: 'ФЕЙХОА',
        image: '36.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 37,
        name: 'ФИСТАШКИ',
        image: '37.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 38,
        name: 'ЧЁРНАЯ СМОРОДИНА',
        image: '38.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 39,
        name: 'ШОКОЛАД',
        image: '39.png',
        price: 30,
        description: 'наслаждения.',
    },
	{
        id: 40,
        name: 'ЭВКАЛИПТ И МЯТА',
        image: '40.png',
        price: 30,
        description: 'наслаждения.',
    },
];

let listCards = {};

function createProductElement(product) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
        <img src="image/${product.image}" data-description="${product.description}" class="picture">
        <div class="title">${product.name}</div>
        <div class="price" id="price_${product.id}">${getFormattedPrice(product.prices ? product.prices[350] : product.price)}</div>
        ${
            product.prices
                ? `<select id="user_obym_${product.id}" onchange="updatePrice(${product.id})">
                    <option value="350">350 мл</option>
                    <option value="400">400 мл</option>
                </select>`
                : ''
        }
        <button onclick="addToCard(${product.id})">Добавить в корзину</button>`;
    return newDiv;
}

firstProduct.forEach((product) => {
    list.appendChild(createProductElement(product));
});

otherProducts.forEach((product) => {
    list.appendChild(createProductElement(product));
});

document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.item');

    items.forEach(function (item) {
        let img = item.querySelector('img');

        img.addEventListener('click', function () {
            let description = img.getAttribute('data-description');
            alert(description);
        });
    });
});

function initApp() {
    firstProduct.forEach((value) => {
        list.appendChild(createProductElement(value));
    });

    otherProducts.forEach((value) => {
        list.appendChild(createProductElement(value));
    });
}

function getFormattedPrice(price) {
    return price && price !== 'такого объёма нет' ? String(price).replace(/р$/, '') + 'р' : 'такого объёма нет';
}

function addToCard(key) {
    const selectedVolume = document.getElementById(`user_obym_${key}`)?.value || 350;
    const productKey = `${key}_${selectedVolume}`;

    const product = key === 1 ? firstProduct[0] : otherProducts.find((item) => item.id === key);

    let productPrice;
    if (key === 1) {
        productPrice = product.prices ? product.prices[selectedVolume] : 'такого объёма нет';
    } else {
        productPrice = product.price;
    }

    if (productPrice !== 'такого объёма нет') {
        if (!listCards[productKey]) {
            listCards[productKey] = {
                ...product,
                quantity: 1,
                selectedVolume: selectedVolume,
                price: productPrice,
            };
        } else {
            listCards[productKey].quantity++;
            listCards[productKey].price = productPrice * listCards[productKey].quantity;
        }

        reloadCard();
    } else {
        alert('Такого объёма нет. Выберите другой объем.');
    }

    updateShoppingText();
}


function reloadCard() {
    listCard.innerHTML = '';
    let totalPrice = 0;
    let count = 0;

    Object.keys(listCards).forEach((productKey) => {
        const value = listCards[productKey];

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}" class="picture"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}р</div>
                <div>Объем: ${value.selectedVolume} мл</div>
                <div>
                    <button onclick="changeQuantity('${productKey}', 'decrement')">-</button>
                    <div class="count" id="count_${productKey}">${value.quantity}</div>
                    <button onclick="changeQuantity('${productKey}', 'increment')">+</button>
                </div>`;
            listCard.appendChild(newDiv);

            totalPrice += value.price;
            count += value.quantity;
        }
    });

    updateShoppingText();

    total.innerText = `${totalPrice.toLocaleString()}р`;
    quantity.innerText = count;
}

function changeQuantity(productKey, action) {
    const selectedVolume = listCards[productKey].selectedVolume;
    let currentQuantity = listCards[productKey].quantity;

    if (action === 'decrement') {
        if (currentQuantity > 1) {
            currentQuantity--;
        } else {
            delete listCards[productKey];
        }
    } else if (action === 'increment') {
        currentQuantity++;
    }

    if (listCards[productKey]) {
        listCards[productKey].quantity = currentQuantity;
        listCards[productKey].price = listCards[productKey].prices[selectedVolume] * currentQuantity;
    }

    reloadCard();
    updateShoppingText();
}

function updatePrice(key) {
    const selectedVolume = document.getElementById(`user_obym_${key}`)?.value || 350;

    const productArray = key === 1 ? firstProduct : otherProducts;
    const product = productArray.find((item) => item.id === key);

    if (product.prices[selectedVolume] !== 'такого объёма нет') {
        const priceElement = document.getElementById(`price_${key}`);
        priceElement.innerText = getFormattedPrice(product.prices[selectedVolume]);
    } else {
        const priceElement = document.getElementById(`price_${key}`);
        priceElement.innerText = 'такого объёма нет';
    }
}

function updateShoppingText() {
    let totalQuantity = 0;
    let totalSum = 0;

    Object.keys(listCards).forEach((productKey) => {
        const value = listCards[productKey];
        if (value != null) {
            totalQuantity += value.quantity;
            totalSum += value.price;
        }
    });

    const shoppingText = totalQuantity > 0 ? `${totalSum.toLocaleString()}р` : 'Корзина';

    document.querySelector('.shopping p').innerText = shoppingText;
}

const overlay = document.getElementById('overlay');
const form = document.getElementById('form');
const totalDiv = document.querySelector('.total');

totalDiv.addEventListener('click', () => {
    overlay.style.display = 'block';
    form.style.display = 'block';
    setTimeout(() => {
        form.style.opacity = '1';
        form.style.pointerEvents = 'auto';
    }, 50);
});

overlay.addEventListener('click', () => {
    form.style.opacity = '0';
    form.style.pointerEvents = 'none';
    setTimeout(() => {
        overlay.style.display = 'none';
        form.style.display = 'none';
    }, 300);
});
