// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDom = getElement(".cart-item-count");//这是购物车的
const cartItemsDom = getElement(".cart-items");

const cartTotalDom = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    //add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  } else {
    //如果item在购物车中则更新数据
    const amount=increaseItem(id)
    const items=[...cartItemsDom.querySelectorAll('.cart-item-amount')]
    const newAmount=items.find((value)=>value.dataset.id===id)
    newAmount.textContent=amount
  }
  //给购物车里的东西加一
  displayCartItemCount();
  //display cart totals
  displayCartTotal();
  //把购物车里的东西放入localStorage
  setStorageItem("cart", cart);
  openCart();
};

function displayCartItemCount() {
  const amount =cart.reduce((total,cartItem)=>{
    return (total+=cartItem.amount)
  },0)
  cartItemCountDom.textContent=amount
}

function displayCartTotal(){
  let total=cart.reduce((total,cartItem)=>{
    return (total+=cartItem.price*cartItem.amount)
  },0)
  cartTotalDom.textContent=`Total:${formatPrice(total)}`}

function displayCartItemsDOM(){
cart.forEach((cartItem)=>{
  addToCartDOM(cartItem)
})
}


function increaseItem(id) {
  let newAmount;
  cart=cart.map((cartItem)=>{
    if(cartItem.id===id){
      newAmount=cartItem.amount+1
      cartItem={...cartItem,amount:newAmount}
    }
      return cartItem
    
  })
  return newAmount
}

function removeItem(id){
  cart = cart.filter((cartItem)=>cartItem.id!==id)
}
function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function setUpCartFunctionality( ) {
  cartItemsDom.addEventListener('click', function (e) {
  const element = e.target;
  const parent = e.target.parentElement;
  const id = e.target.dataset.id;
  const parentID = e.target.parentElement.dataset.id;
    // remove
    if (element.classList.contains('cart-item-remove-btn')) {
      removeItem(id);
      // parent.parentElement.remove();
      element.parentElement.parentElement.remove();
    }
        // increase
        if (parent.classList.contains('cart-item-increase-btn')) {
          const newAmount = increaseItem(parentID);
          parent.nextElementSibling.textContent = newAmount;
        }
    // decrease
    if (parent.classList.contains('cart-item-decrease-btn')) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }


    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);

})
}





const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();//在不同页面
  setUpCartFunctionality();
};
init();