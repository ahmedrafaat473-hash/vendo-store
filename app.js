function addToCart() {

  let product = {
    name: "تيشيرت VENDO",
    price: 299,
    qty: 1
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("تمت الإضافة للسلة 🛒");
}
