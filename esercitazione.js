const apiUrl = 'https://striveschool-api.herokuapp.com/books';
const booksContainer = document.getElementById('books-container');
const cartList = document.getElementById('cart-list');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    cartList.innerHTML = '';
    cart.forEach((book, index) => {
        const li = document.createElement('li');
        li.className = 'mb-2';
        li.textContent = `${book.title} - ${book.price}€`;
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger btn-sm ms-2';
        removeBtn.textContent = 'Rimuovi';
        removeBtn.addEventListener('click', () => removeFromCart(index));
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function addToCart(book) {
    cart.push(book);
    renderCart();
}

function createBookCard(book) {
    const col = document.createElement('div');
    col.className = 'col-md-3 mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = book.img;
    img.alt = book.title;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = book.title;

    const price = document.createElement('p');
    price.className = 'card-text';
    price.textContent = `${book.price}€`;

    const discardBtn = document.createElement('button');
    discardBtn.className = 'btn btn-danger btn-sm';
    discardBtn.textContent = 'Scarta';
    discardBtn.addEventListener('click', () => col.remove());

    const buyBtn = document.createElement('button');
    buyBtn.className = 'btn btn-primary btn-sm';
    buyBtn.textContent = 'Compra ora';
    buyBtn.addEventListener('click', () => addToCart({ title: book.title, price: book.price }));

    cardBody.append(title, price, discardBtn, buyBtn);
    card.append(img, cardBody);
    col.appendChild(card);
    return col;
}

async function fetchBooks() {
    try {
        const response = await fetch(apiUrl);
        const books = await response.json();
        books.forEach(book => {
            const card = createBookCard(book);
            booksContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Initialize page
renderCart();
fetchBooks();

