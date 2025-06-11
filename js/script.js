// --- ДАННЫЕ ТОВАРОВ ---
const products = [
  {
    id: 1,
    name: "Медовый торт",
    description: "Торт медовик, рецепт со сметанным кремом. Для приготовления этого торта понадобится совсем немного меда, но готовый медовик имеет насыщенный медовый вкус. А нежный сметанный крем отлично пропитывает печеные коржи.",
    price: 450,
    ingredients: "маргарин,сахар, мед, сода не гашеная, яйца, мука, сметана 15-20%.",
    image: "images/cake1.jpg",
    category: "Торты",
    bestMonth: true,
    recommended: true,
    discount: 15,
    discountStart: null,
    discountEnd: null,
  },
  {
    id: 2,
    name: "Домашний хлеб",
    description: "Корочка у хлеба получается золотистая, тонкая и хрустящая! А вкус - как у деревенского хлебушка: настоящий, живой!",
    price: 120,
    ingredients: "Мука, вода, дрожжи, соль, растительное масло, сахар.",
    image: "images/bread1.jpg",
    category: "Хлеб",
    bestMonth: false,
    recommended: true,
    discount: 20,
    discountStart: "2025-06-01T00:00:00Z",
    discountEnd: "2025-06-07T23:59:59Z",
  },
  {
    id: 3,
    name: "Пирожное с клубникой",
    description: "Этот рецепт кексов с клубникой не совсем обычный. Тесто готовится не только из масла, молока, яиц и муки — в этих аппетитных кексах клубничных «прячется» полезная овсянка.",
    price: 200,
    ingredients: "Мука, яйца, сливки, клубника, сахар, разрыхлитель, овсяная крупа, масло сливочное, ванилин.",
    image: "images/cake2.jpg",
    category: "Пирожные",
    bestMonth: true,
    recommended: false,
    discount: 0,
    discountStart: null,
    discountEnd: null,
  },
  {
    id: 4,
    name: "Шоколадный торт",
    description: "Знаменитый шоколадный торт 'Капрезе' (итал. torta caprese) готовится абсолютно без муки. По легенде, итальянский повар просто забыл её добавить, когда готовил десерт для мафиозе Аль Капоне на острове Капри. Но результат превзошел все ожидания! Мягкий и нежный внутри, но с хрустящей корочкой снаружи.",
    price: 480,
    ingredients: "Шоколад молочный, шоколад тёмный, какао, яйца, масло, сахар, миндаль жареный",
    image: "images/cake3.jpg",
    category: "Торты",
    bestMonth: false,
    recommended: true,
    discount: 0,
    discountStart: null,
    discountEnd: null,
  },
  {
    id: 5,
    name: "Багет французский",
    description: "Багет - символ Франции и гордость французов. Закажите этот очень вкусный хлебушек, вы останетесь довольны результатом.",
    price: 150,
    ingredients: "Мука, вода, соль, дрожжи сухие активные, ",
    image: "images/bread2.jpg",
    category: "Хлеб",
    bestMonth: false,
    recommended: false,
    discount: 5,
    discountStart: null,
    discountEnd: null,
  },
  {
    id: 6,
    name: "Эклер с ванильным кремом",
    description: "Эклеры с ванильным кремом — это пирожные из заварного теста, заполненные начинкой из нежного крема. Ванильные нотки делают сливочный вкус более изысканным и выразительным.",
    price: 220,
    ingredients: "Мука, яйца, масло сливочное, вода, молоко, сгущенка белая, ваниль, сахар",
    image: "images/eclair1.jpg",
    category: "Пирожные",
    bestMonth: true,
    recommended: true,
    discount: 40,
    discountStart: "2025-06-05T00:00:00Z",
    discountEnd: "2025-06-12T23:59:59Z",
  },
  {
    id: 7,
    name: "Классический торт 'Наполеон'",
    description: "Один из самых вкусных и любимых десертов в моей семье - торт 'Наполеон'. Его приготовление не назовешь простым и быстрым, но результат, безусловно, стоит этих усилий. Торт получается изумительно вкусным, с тонкими коржами и нежнейшим масляно-заварным кремом.",
    price: 520,
    ingredients: "Мука, яйца, масло сливочное, вода, молоко, конья, ваниль, сахар",
    image: "images/cake4.jpg",
    category: "Торты",
    bestMonth: true,
    recommended: true,
    discount: 5,
    discountStart: "2025-06-05T00:00:00Z",
    discountEnd: "2025-06-12T23:59:59Z",
  },
  {
    id: 8,
    name: "Пирожное моти",
    description: "Моти — японский десерт, сладкие пирожные из клейкого рисового теста со всевозможными начинками. В качестве начинки используют печенье, шоколад, фасолевую сладкую пасту, мороженое, но чаще всего — фрукты и ягоды. Для особой кремовой текстуры в моти добавляют творожные или сливочные сыры, а также сгущёнку или сливки. ",
    price: 300,
    ingredients: "Мука рисовая, шоколад белый, сыр маскарпоне, вода, клубника, сахар",
    image: "images/cake5.jpg",
    category: "Пирожные",
    bestMonth: true,
    recommended: true,
    discount: 0,
    discountStart: "2025-06-05T00:00:00Z",
    discountEnd: "2025-06-12T23:59:59Z",
  },
  {
    id: 9,
    name: "Банановый хлеб с изюмом и орехами",
    description: "Аромат этого хлеб наполнит весь дом и согреет теплом каждого в холодные осенние вечера! Очень вкусный банановый хлеб, который можно приготовить, если у вас дома завалялись бананы. Никто их уже не хочет есть? Тогда самое время приготовить этот обалденный банановый хлеб с изюмом и грецкими орехами!",
    price: 620,
    ingredients: "Мука, бананы, масло сливочное, изюм, разрыхлитель, орехи грецкие обжаренные, ваниль, сахар",
    image: "images/bread3.jpg",
    category: "Хлеб",
    bestMonth: true,
    recommended: true,
    discount: 23,
    discountStart: "2025-06-05T00:00:00Z",
    discountEnd: "2025-06-12T23:59:59Z",
  }
];

// --- ЛОГИКА ПРОСМОТРОВ ---
const STORAGE_KEY = "bakeryProductViews";

function loadViews() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

function saveViews(views) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
}

function increaseViewCount(productId) {
  const views = loadViews();
  views[productId] = (views[productId] || 0) + 1;
  saveViews(views);
}

function getTopViewedProducts(count) {
  const views = loadViews();
  const productsWithViews = products.map(p => ({
    ...p,
    viewsCount: views[p.id] || 0
  }));
  productsWithViews.sort((a, b) => b.viewsCount - a.viewsCount);

  if (productsWithViews.every(p => p.viewsCount === 0)) {
    return products.filter(p => p.bestMonth).slice(0, count);
  }

  return productsWithViews.slice(0, count);
}

function getUniqueCategories() {
  const cats = products.map(p => p.category);
  return [...new Set(cats)];
}

function renderCategoryFilter() {
  const select = document.getElementById("category-filter");
  if (!select) return;

  select.innerHTML = `<option value="all">Все категории</option>`;

  getUniqueCategories().forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    renderCatalog(select.value);
  });
}

function renderCatalog(category = "all") {
  const container = document.getElementById("catalog-products");
  if (!container) return;
  container.innerHTML = "";

  let filtered = category === "all" ? products : products.filter(p => p.category === category);

  if (filtered.length === 0) {
    container.textContent = "Товары не найдены.";
    return;
  }

  filtered.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const now = new Date();
  let priceHtml = `${product.price} ₽`;
  if (
    product.discount &&
    product.discount > 0 &&
    product.discountStart &&
    product.discountEnd
  ) {
    const start = new Date(product.discountStart);
    const end = new Date(product.discountEnd);
    if (now >= start && now <= end) {
      const discountedPrice = Math.round(product.price * (100 - product.discount) / 100);
      priceHtml = `<del>${product.price} ₽</del> <strong>${discountedPrice} ₽</strong> (${product.discount}% скидка)`;
    }
  }

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="price">${priceHtml}</div>
    <button class="add-to-cart-btn">Добавить в корзину</button>
  `;
  card.style.cursor = "pointer";

  card.onclick = e => {
    if (e.target.classList.contains("add-to-cart-btn")) return;
    window.location.href = `product.html?id=${product.id}`;
  };

  card.querySelector(".add-to-cart-btn").onclick = e => {
    e.stopPropagation();
    addToCart(product.id);
  };

  return card;
}

function getDailyRecommendedProducts(count) {
  const recommended = products.filter(p => p.recommended);
  if (recommended.length === 0) return [];

  const now = new Date();
  const dayNumber = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));

  const startIndex = dayNumber % recommended.length;

  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(recommended[(startIndex + i) % recommended.length]);
  }

  return result;
}

function getActiveDiscountProducts() {
  const now = new Date();
  return products.filter(product => {
    if (
      product.discount &&
      product.discount > 0 &&
      product.discountStart &&
      product.discountEnd
    ) {
      const start = new Date(product.discountStart);
      const end = new Date(product.discountEnd);
      return now >= start && now <= end;
    }
    return false;
  });
}

function renderDiscountBlock() {
  const discountContainer = document.getElementById("discount-products");
  if (!discountContainer) return;

  const discountProducts = getActiveDiscountProducts();

  if (discountProducts.length === 0) {
    discountContainer.innerHTML = "<p>Сейчас нет активных акций.</p>";
    return;
  }

  const html = discountProducts.map(product => {
    const discountedPrice = Math.round(product.price * (100 - product.discount) / 100);
    return `
      <div class="product-card discount-card" data-product-id="${product.id}" style="cursor:pointer;">
        <h4>${product.name}</h4>
        <p>Цена: <del>${product.price} руб.</del> <strong>${discountedPrice} руб.</strong> (${product.discount}% скидка)</p>
      </div>
    `;
  }).join("");

  discountContainer.innerHTML = html;

  // Навешиваем обработчики кликов на каждую карточку акции
  discountProducts.forEach(product => {
    const card = discountContainer.querySelector(`.discount-card[data-product-id="${product.id}"]`);
    if (card) {
      card.onclick = () => {
        window.location.href = `product.html?id=${product.id}`;
      };
    }
  });
}

function loadHomePage() {
  const bestContainer = document.getElementById("best-products");
  const recContainer = document.getElementById("recommended-products");

  if (bestContainer) {
    bestContainer.innerHTML = "";
    const bestProducts = getTopViewedProducts(3);
    bestProducts.forEach(p => bestContainer.appendChild(createProductCard(p)));
  }

  if (recContainer) {
    recContainer.innerHTML = "";
    const recProducts = getDailyRecommendedProducts(3);
    recProducts.forEach(p => recContainer.appendChild(createProductCard(p)));
  }

  renderDiscountBlock();
}

function loadCatalogPage() {
  const catalogContainer = document.getElementById("catalog-products");
  if (!catalogContainer) return;

  renderCategoryFilter();
  renderCatalog("all");
}

function loadProductPage() {
  const detailContainer = document.getElementById("product-detail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  if (!id) {
    detailContainer.innerHTML = "<p>Товар не найден.</p>";
    return;
  }

  const product = products.find(p => p.id === id);
  if (!product) {
    detailContainer.innerHTML = "<p>Товар не найден.</p>";
    return;
  }

  increaseViewCount(id);

  let priceHtml = `${product.price} ₽`;
  const now = new Date();
  if (
    product.discount &&
    product.discount > 0 &&
    product.discountStart &&
    product.discountEnd
  ) {
    const start = new Date(product.discountStart);
    const end = new Date(product.discountEnd);
    if (now >= start && now <= end) {
      const discountedPrice = Math.round(product.price * (100 - product.discount) / 100);
      priceHtml = `<del>${product.price} ₽</del> <strong>${discountedPrice} ₽</strong> (${product.discount}% скидка)`;
    }
  }

  detailContainer.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-info">
      <h2>${product.name}</h2>
      <p><strong>Описание:</strong> ${product.description}</p>
      <p><strong>Состав:</strong> ${product.ingredients}</p>
      <div class="price">${priceHtml}</div>
    </div>
  `;
}

// --- ОБНОВЛЕНИЕ СТРАНИЦ И ПРОВЕРКА ИЗМЕНЕНИЙ СКИДОК ---
const REFRESH_INTERVAL = 60 * 1000; // 1 минута
let currentActiveDiscountIds = new Set();

function getActiveDiscountProductIds() {
  const now = new Date();
  return new Set(
    products
      .filter(product => {
        if (
          product.discount &&
          product.discount > 0 &&
          product.discountStart &&
          product.discountEnd
        ) {
          const start = new Date(product.discountStart);
          const end = new Date(product.discountEnd);
          return now >= start && now <= end;
        }
        return false;
      })
      .map(p => p.id)
  );
}

function setsAreEqual(a, b) {
  if (a.size !== b.size) return false;
  for (let item of a) {
    if (!b.has(item)) return false;
  }
  return true;
}

function checkDiscountChangesAndReload() {
  const newActiveDiscountIds = getActiveDiscountProductIds();

  if (!setsAreEqual(currentActiveDiscountIds, newActiveDiscountIds)) {
    currentActiveDiscountIds = newActiveDiscountIds;
    console.log("Изменение скидок обнаружено — перезагрузка страницы...");
    location.reload();
  }
}

function refreshHomePage() {
  loadHomePage();
}

function refreshCatalogPage() {
  const select = document.getElementById("category-filter");
  const currentCategory = select ? select.value : "all";
  renderCatalog(currentCategory);
}

// --- КОРЗИНА ---
const CART_STORAGE_KEY = "bakeryCart";

function loadCart() {
  const data = localStorage.getItem(CART_STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId) {
  const cart = loadCart();
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart(cart);
  alert("Товар добавлен в корзину");
}

function removeFromCart(productId) {
  const cart = loadCart();
  if (cart[productId]) {
    delete cart[productId];
    saveCart(cart);
    renderCart();
  }
}

function updateCartItemCount(productId, count) {
  const cart = loadCart();
  if (count <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = count;
  }
  saveCart(cart);
  renderCart();
}

function updateCartCount() {
  const cart = loadCart();
  const count = Object.values(cart).reduce((a,b) => a + b, 0);
  const countElem = document.getElementById("cart-count");
  if (countElem) countElem.textContent = count;
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  if (!cartItemsContainer) return;

  const cart = loadCart();
  if (Object.keys(cart).length === 0) {
    cartItemsContainer.innerHTML = "<p>Корзина пуста.</p>";
    return;
  }

  let html = `<table style="width:100%;border-collapse:collapse;">
    <thead>
      <tr>
        <th style="border-bottom:1px solid #ccc;text-align:left;">Товар</th>
        <th style="border-bottom:1px solid #ccc;">Цена</th>
        <th style="border-bottom:1px solid #ccc;">Количество</th>
        <th style="border-bottom:1px solid #ccc;">Итого</th>
        <th style="border-bottom:1px solid #ccc;">Удалить</th>
      </tr>
    </thead>
    <tbody>`;

  let totalSum = 0;

  for (const productIdStr of Object.keys(cart)) {
    const productId = parseInt(productIdStr);
    const qty = cart[productIdStr];
    const product = products.find(p => p.id === productId);
    if (!product) continue;

    let price = product.price;
    const now = new Date();
    if (
      product.discount &&
      product.discount > 0 &&
      product.discountStart &&
      product.discountEnd
    ) {
      const start = new Date(product.discountStart);
      const end = new Date(product.discountEnd);
      if (now >= start && now <= end) {
        price = Math.round(product.price * (100 - product.discount) / 100);
      }
    }
    const sum = price * qty;
    totalSum += sum;

    html += `
      <tr>
        <td>${product.name}</td>
        <td style="text-align:center;">${price} ₽</td>
        <td style="text-align:center;">
          <input type="number" min="1" value="${qty}" data-product-id="${productId}" class="cart-qty-input" style="width:50px;">
        </td>
        <td style="text-align:center;">${sum} ₽</td>
        <td style="text-align:center;">
          <button data-product-id="${productId}" class="cart-remove-btn">×</button>
        </td>
      </tr>
    `;
  }

  html += `</tbody></table>`;
  html += `<p style="text-align:right; font-weight:bold; margin-top:10px;">Общая сумма: ${totalSum} ₽</p>`;

  cartItemsContainer.innerHTML = html;

  cartItemsContainer.querySelectorAll(".cart-remove-btn").forEach(btn => {
    btn.onclick = () => {
      const pid = parseInt(btn.getAttribute("data-product-id"));
      removeFromCart(pid);
    };
  });

  cartItemsContainer.querySelectorAll(".cart-qty-input").forEach(input => {
    input.onchange = () => {
      const pid = parseInt(input.getAttribute("data-product-id"));
      let val = parseInt(input.value);
      if (isNaN(val) || val < 1) val = 1;
      input.value = val;
      updateCartItemCount(pid, val);
    };
  });
}

// --- ИНИЦИАЛИЗАЦИЯ ПОСЛЕ ЗАГРУЗКИ ---
document.addEventListener("DOMContentLoaded", () => {
  // Инициализация корзины
  updateCartCount();

  // Модальное окно корзины
  const cartModal = document.getElementById("cart-modal");
  const openCartBtn = document.getElementById("open-cart-btn");
  const closeCartBtn = document.getElementById("cart-close-btn");

  if (openCartBtn && cartModal && closeCartBtn) {
    openCartBtn.onclick = () => {
      renderCart();
      const orderMessage = document.getElementById("order-message");
      if (orderMessage) orderMessage.style.display = "none";
      cartModal.style.display = "flex";
    };

    closeCartBtn.onclick = () => {
      cartModal.style.display = "none";
    };

    cartModal.onclick = e => {
      if (e.target === cartModal) {
        cartModal.style.display = "none";
      }
    };
  }

  // Обработка формы заказа
  const orderForm = document.getElementById("order-form");
  if (orderForm) {
    orderForm.onsubmit = async e => {
      e.preventDefault();

      const name = document.getElementById("order-name").value.trim();
      const phone = document.getElementById("order-phone").value.trim();
      const address = document.getElementById("order-address").value.trim();
      const cart = loadCart();

      if (!name || !phone || !address) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }

      if (Object.keys(cart).length === 0) {
        alert("Ваша корзина пуста.");
        return;
      }

      // Формируем детали заказа
      const orderProducts = Object.entries(cart).map(([productId, qty]) => {
        const product = products.find(p => p.id === parseInt(productId));
        if (!product) return null;
        let price = product.price;
        const now = new Date();
        if (
          product.discount &&
          product.discount > 0 &&
          product.discountStart &&
          product.discountEnd
        ) {
          const start = new Date(product.discountStart);
          const end = new Date(product.discountEnd);
          if (now >= start && now <= end) {
            price = Math.round(product.price * (100 - product.discount) / 100);
          }
        }
        return {
          id: product.id,
          name: product.name,
          quantity: qty,
          price: price,
          total: price * qty
        };
      }).filter(p => p !== null);

      const totalSum = orderProducts.reduce((acc, item) => acc + item.total, 0);

      const orderData = {
        customerName: name,
        customerPhone: phone,
        customerAddress: address,
        products: orderProducts,
        totalSum: totalSum,
        orderDate: new Date().toISOString()
      };

      // Отправляем запрос на серверный API для отправки email менеджеру
      try {
        const response = await fetch('/api/send-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderData)
        });
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }

        document.getElementById("order-message").textContent = `Спасибо, ${name}! Ваш заказ принят. Мы свяжемся с вами по телефону ${phone}.`;
        document.getElementById("order-message").style.display = "block";

        localStorage.removeItem(CART_STORAGE_KEY);
        updateCartCount();
        renderCart();
        orderForm.reset();

      } catch (error) {
        alert('Ошибка при отправке заказа. Попробуйте позже.');
        console.error(error);
      }
    };
  }

  // Инициализация множества активных скидок и проверка изменений
  currentActiveDiscountIds = getActiveDiscountProductIds();
  setInterval(checkDiscountChangesAndReload, REFRESH_INTERVAL);

  // Инициализация страниц
  if (
    document.getElementById("best-products") ||
    document.getElementById("recommended-products") ||
    document.getElementById("discount-products")
  ) {
    loadHomePage();
    setInterval(refreshHomePage, REFRESH_INTERVAL);
  }
  if (document.getElementById("catalog-products")) {
    loadCatalogPage();
    setInterval(refreshCatalogPage, REFRESH_INTERVAL);
  }
  if (document.getElementById("product-detail")) {
    loadProductPage();
  }
});
