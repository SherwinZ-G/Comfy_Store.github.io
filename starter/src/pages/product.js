// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;


// show product when page loads
window.addEventListener("DOMContentLoaded",async function(){
    const urlID=window.location.search;
    console.log(urlID);
    const response=await fetch(`${singleProductUrl}${urlID}`)
 if (response.status>=200 && response.status<=299){
    const product=await response.json();
    //获取product数组里面的id,fields 属性和值
   const{id,fields}=product;
   productID=id;
   const {name,company,price,colors,description}=fields;
   const image=fields.image[0].thumbnails.large.url;
   //set values
   document.title=`${name.toUpperCase()} | Comfy`
   pageTitleDOM.innerHTML=`Products / ${name}`
   titleDOM.innerHTML=`${name}`
   companyDOM.innerHTML=`${company}`

   priceDOM.innerHTML=`$${price/100}`
   descDOM.innerHTML=description
imgDOM.src=image
colors.forEach((color)=>{
    const span=this.document.createElement('span');
    span.classList.add('product-color') 
    span.style.backgroundColor=`${color}`
    colorsDOM.appendChild(span)
})

 }else{
    console.log(response.status,response.statusText);
    centerDOM=`<h3 class='error'>sorry, no products here</h3>`
 }
    // pageTitleDOM.innerHTML=response.
   loading.style.display='none' 
})


cartBtn.addEventListener('click',function(){
    addToCart(productID)
})

