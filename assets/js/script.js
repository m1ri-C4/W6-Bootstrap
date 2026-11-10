const items = [
    {
        title: 'Saldi di primavera',
        subtitle: 'Fino al 50% di sconto sui prodotti in evidenza',
        color: 'primary',
    },

    {
        title: 'Nuova collezione',
        subtitle: 'Scopri gli arrivi della settimana',
        color: 'success',
    },

    {
        title: 'Spedizione gratis',
        subtitle: 'Sopra i 50€ su tutto il sito',
        color: 'dark',
    },
];

const products = [
    {
        name: 'Sneaker Run',
        price: '€ 89,00',
        description: 'Scarpa leggera per la corsa, suola in gomma traspirante.',
    },

    {
        name: 'T-shirt basic',
        price: '€ 19,00',
        description: 'Cotone biologico, taglio regolare, disponibile in 5 colori.',
    },

    {
        name: 'Borsa city',
        price: '€ 49,00',
        description: 'Tessuto resistente, tasca interna, cinghia regolabile.',
    },
];

const carouselInner = document.querySelector('.carousel-inner');

items.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item', `bg-${item.color}`, 'py-5');

    if (index === 0) {
        carouselItem.classList.add('active');
    }

    const h2 = document.createElement('h2');
    h2.classList.add('fw-bold', 'text-light');
    h2.textContent = item.title;

    const p = document.createElement('p');
    p.classList.add('text-light', 'mb-4');
    p.textContent = item.subtitle;

    carouselItem.append(h2, p);
    carouselInner.append(carouselItem);

});

products.sort(() => Math.random() - 0.5);

const productsRow = document.querySelector('#productsRow');

products.forEach((product) => {
    const article = document.createElement('article');
    article.classList.add('col-12', 'col-sm-6', 'col-xl-4');

    const card = document.createElement('div');
    card.classList.add('card', 'w-100');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top');
    cardImg.src = 'https://placehold.jp/300x180.png';
    cardImg.alt = product.name;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title', 'fw-semibold');
    cardTitle.textContent = product.name;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'text-muted');
    cardText.textContent = product.description;

    const cardPrice = document.createElement('h5');
    cardPrice.classList.add('fw-bold', 'mb-3');
    cardPrice.textContent = product.price;

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary', 'w-100');
    button.textContent = 'Dettagli';

    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#exampleModal');

    cardBody.append(cardTitle, cardText, cardPrice, button);
    card.append(cardImg, cardBody);
    article.append(card);
    productsRow.append(article);
    
});