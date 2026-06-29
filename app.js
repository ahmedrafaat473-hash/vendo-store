let qty = 1;
let basePrice = 299;
let selectedPrice = basePrice;

function changeQty(v){
  qty += v;
  if(qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
  updateTotal();
}

function updatePrice(){
  let q = document.getElementById("quality").value;
  selectedPrice = basePrice * q;
  updateTotal();
}

function updateTotal(){
  let total = selectedPrice * qty;
  document.getElementById("totalPrice").innerText =
    "الإجمالي: " + total + " جنيه";
}

function addToCart(){

  let product = {
    name: "تيشيرت VENDO",
    price: selectedPrice,
    qty: qty,
    size: document.getElementById("size").value
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("تمت الإضافة للسلة 🛒");
}
