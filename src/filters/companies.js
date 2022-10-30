import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  //1. 获得这些商品数据的公司名称
  // let companies=store.map((product)=>product.company);
  //2. 只获得当前数组的unique value
  // let companies=new Set(store.map((product)=>product.company));

  //3. 装进一个数组,并增加‘all’
  let companies = ["all", ...new Set(store.map((product) => product.company))];
  console.log(companies);

  const companycontainer = getElement(".companies");
  companycontainer.innerHTML = companies
    .map((company) => `<button class="company-btn">${company}</button>`)
    .join("");

  companycontainer.addEventListener("click", function (e) {
    const element = e.target;
    let newStore = [];    
    if (element.textContent === "all") {
      newStore = [...store];
    } else {
      newStore = store.filter((product) => product.company === element.textContent);
    }
    display(newStore, getElement(".products-container"));
  });
};

export default setupCompanies;
