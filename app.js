function addToCart() {

  let name = "تيشيرت VENDO";

  let size = document.getElementById("size").value;
  let quality = document.getElementById("quality").value;
  let qty = parseInt(document.getElementById("qty").innerText);

  let basePrice = 299;
  let price = basePrice * quality;

  let product = {
    name: name,
    size: size,
    quality: quality,
    price: price,
    qty: qty
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("تمت الإضافة للسلة 🛒");
}
