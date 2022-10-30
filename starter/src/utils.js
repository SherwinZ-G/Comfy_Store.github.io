//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

  // const getElement=document.querySelector('.featured')
const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const formatPrice = (price) => {
let formattedPrice=new Intl.NumberFormat('en-US',{
  style:'currency',
  currency:'USD'

}).format((price/100).toFixed(2));
return formattedPrice}

const getStorageItem = (item) => {
  let storageItem=localStorage.getItem(item);
  if(storageItem){
    return storageItem=JSON.parse(localStorage.getItem(item))
  }else{
    //如果商品不存在返回空数组
      return storageItem=[]
  }

}
const setStorageItem = (name,item) => {
  //将商品数据放入localstorage
 return localStorage.setItem(name,JSON.stringify(item))
}

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
