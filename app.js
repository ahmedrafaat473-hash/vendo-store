let qty = 1;
let basePrice = 299;
let quality = 1;

function changeQty(val){
  qty += val;
  if(qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
  updateTotal();
}

function updatePrice(){
  quality = document.getElementById("quality").value;
  updateTotal();
}

function updateTotal(){
  let total = basePrice * qty * quality;
  document.getElementById("totalPrice").innerText = "الإجمالي: " + total + " جنيه";
}

function changeColor(color){
  let img = document.getElementById("mainImage");

  if(color === "black"){
    img.src = "https://via.placeholder.com/400/000000";
  }
  if(color === "white"){
    img.src = "https://via.placeholder.com/400/ffffff";
  }
  if(color === "blue"){
    img.src = "https://via.placeholder.com/400/0000ff";
  }
  if(color === "red"){
    img.src = "https://via.placeholder.com/400/ff0000";
  }
}

function previewText(){
  let text = document.getElementById("customText").value;
  console.log("Text on shirt:", text);
}

function uploadLogo(event){
  let file = event.target.files[0];
  console.log("Logo uploaded:", file.name);
}
function addToCart(){

  let product = {
    name: "تيشيرت VENDO",
    price: basePrice * quality,
    qty: qty
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("تمت الإضافة إلى السلة 🛒");
}
