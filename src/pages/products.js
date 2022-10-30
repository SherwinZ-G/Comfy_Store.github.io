// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { setupStore, store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";

const loading = getElement(".page-loading");
import fetchProducts from "../fetchProducts.js";
const init = async () => {
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  display(store, getElement(".products-container"));
  //简单的loading，展示完数据后不显示
  loading.style.display = "none";
  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);
};
init();
