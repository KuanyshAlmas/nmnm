

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:3,
          nav:false
        },
        1000:{
          items:5,
          nav:true,
          loop:false
        }
      }
    });
  });

  // Создаем объект корзины
let cart = {
    items: [],
    totalCost: 0,
  };
  
  // Функция для добавления блюда в корзину
  function addToCart(foodName, foodPrice) {
    cart.items.push({ name: foodName, price: foodPrice });
    cart.totalCost += foodPrice;
    updateCart();
  }
  
  // Функция для обновления отображения корзины
  function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalCostElement = document.getElementById('total-cost');
  
    // Очищаем предыдущее содержимое корзины
    cartList.innerHTML = '';
  
    // Добавляем новые элементы в корзину
    cart.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price} KZT`;
      cartList.appendChild(li);
    });
  
    // Обновляем общую стоимость
    totalCostElement.textContent = `Общая стоимость: ${cart.totalCost} KZT`;
  }
  
  // Пример использования
  // Добавляем блюда в корзину при клике
  document.getElementById('add-to-cart-btn1').addEventListener('click', function () {
    addToCart('Коул Слоу', 1100);
  });
  
  document.getElementById('add-to-cart-btn2').addEventListener('click', function () {
    addToCart('Новогодний', 1300);
  });
  
  document.getElementById('add-to-cart-btn3').addEventListener('click', function () {
    addToCart('Винегрет', 1100);
  });