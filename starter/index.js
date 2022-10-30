// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init=async()=>{
    const products=await fetchProducts();
    if(products){
        //将products放进store
        setupStore(products)
        //筛选出fetured属性为true的商品，展示到首页的feature section上
        const featured=store.filter((product)=>
            product.featured==true
        );
        display(featured,getElement('.featured-center'))
     
    }
    
}

window.addEventListener("DOMContentLoaded",init)