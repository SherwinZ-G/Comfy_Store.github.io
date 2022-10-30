import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");
  form.addEventListener("keyup", function () {
    const value = nameInput.value;
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        if (name.startsWith(value)) {
            console.log(product);
            return product;         
        }
      });
      display(newStore,getElement(".products-container"))
      if(newStore.length<1){
        getElement(".products-container").innerHTML=`<h3 class='filter-error'>sorry, no products here</h3>`
      }
    } 
        else {
      display(store, getElement(".products-container"));
    }
  });
};

export default setupSearch;
