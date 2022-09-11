/*******************************************/
/* DEFAULT */
// navbar 4 css
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItemContainer.classList.remove("active");
};

// search form 4 css
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItemContainer.classList.remove("active");
};

// cart Item 4 css
let cartItemContainer = document.querySelector(".cart-items-container");
const defaultItem = document.querySelector("#default-item");

document.querySelector("#cart-btn").onclick = () => {
  cartItemContainer.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  emptyContainerChecking();
};

// onscroll 4 css
window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItemContainer.classList.remove("active");
};
/*******************************************/

/* DYNAMIC */
//get element
const checkNow = document.querySelector("#check_now");

const dudhCha = document.querySelector("#dudh_cha a");
const rongCha = document.querySelector("#rong_cha a");
const horlicsCha = document.querySelector("#horlics_cha a");
const coffeeCha = document.querySelector("#coffee_cha a");
const lebuCha = document.querySelector("#lebu_cha");
const monerCha = document.querySelector("#moner_cha");

// functions
function newOrder(name, price, img) {
  const div = document.createElement("div");
  div.classList.add("cart-item");
  div.classList.add("item");
  div.innerHTML = `
  
        <span class="fas fa-times" onclick="deleteElement(event)"></span>
        <img src="${img}" alt="" />
        <div class="content">
          <h3>${name}</h3>
          <div class="price itemPrice" style="font-weight: 900">${price}</div>
        </div>

    `;

  cartItemContainer.insertBefore(div, checkNow);
}

function addOrder(e) {
  const parent = e.target.parentElement;
  const img = parent.childNodes[1].getAttribute("src");
  const name = parent.childNodes[3].textContent;
  const price = parent.childNodes[5].firstChild.textContent;

  newOrder(name, price, img);
  emptyContainerChecking();
}
function onClick(name) {
  name.addEventListener("click", (e) => {
    addOrder(e);
  });
}
function executeClickEvent() {
  onClick(dudhCha);
  onClick(rongCha);
  onClick(horlicsCha);
  onClick(coffeeCha);
  onClick(lebuCha);
  onClick(monerCha);
}
function deleteElement(event) {
  event.target.parentElement.remove();
  emptyContainerChecking();
}
function emptyContainerChecking() {
  if (cartItemContainer.children.length === 3) {
    defaultItem.style = "display: flex";
  } else {
    defaultItem.style = "display: none";
  }
}
function checkOut() {
  const perItemPrice = document.querySelectorAll(".itemPrice");
  let total = 0;
  for (let price of perItemPrice) {
    let perItem = parseInt(price.textContent.slice(2));

    if (isNaN(perItem)) {
      perItem = 0;
    }

    total += perItem;
  }
  let totalPrice = document.querySelector(".totalPrice");
  totalPrice.textContent = `৳ ${total}.00`;
}

//append && call
executeClickEvent();
