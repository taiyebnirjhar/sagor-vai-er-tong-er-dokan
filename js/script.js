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

  if (cartItemContainer.children === 2) {
    defaultItem.style = "display: flex";
  } else {
    defaultItem.style = "display: none";
  }
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

  div.innerHTML = `
  
        <span class="fas fa-times"></span>
        <img src="${img}" alt="" />
        <div class="content">
          <h3>${name}</h3>
          <div class="price"  style="font-weight: 900">${price}</div>
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
}
function onClick(name) {
  name.addEventListener("click", (e) => {
    addOrder(e);
    console.log("clicked");
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
//apend
executeClickEvent();
// card container
console.log(cartItemContainer.children);
