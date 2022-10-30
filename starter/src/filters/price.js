import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  let maxPrice = store.map((product) => product.price);
  //获得数组中最大的数
  maxPrice = Math.max(...maxPrice);

  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value:${maxPrice}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value); //因为返回的是一个string
    priceValue.textContent = `Value:${value}`;

    const cheap = store.filter((product) => product.price / 100 <= value);

    display(cheap, getElement(".products-container"));
    if (cheap.length < 1) {
      getElement(
        ".products-container"
      ).innerHTML = `<h3 class='filter-error'>sorry, no products here</h3>`;
    }
  });
};

export default setupPrice;
