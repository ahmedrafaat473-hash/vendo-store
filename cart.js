let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  let container = document.getElementById("cartItems");
  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>السعر: ${item.price}</p>
        <p>الكمية: ${item.qty}</p>

        <button onclick="removeItem(${index})">حذف ❌</button>
      </div>
    `;
  });

  document.getElementById("cartTotal").innerText =
    "الإجمالي: " + total + " جنيه";
}

function removeItem(index){
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function clearCart(){
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
