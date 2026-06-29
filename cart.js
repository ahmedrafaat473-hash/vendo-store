let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart(){

  let container = document.getElementById("cartItems");
  container.innerHTML = "";

  let total = 0;

  cart.forEach(item => {

    total += item.price * item.qty;

    container.innerHTML += `
      <div>
        <h3>${item.name}</h3>
        <p>المقاس: ${item.size}</p>
        <p>السعر: ${item.price}</p>
        <p>الكمية: ${item.qty}</p>
      </div>
    `;
  });

  document.getElementById("cartTotal").innerText =
    "الإجمالي: " + total + " جنيه";
}

function clearCart(){
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
