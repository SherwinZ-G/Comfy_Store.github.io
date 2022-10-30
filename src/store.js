import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store')
const setupStore = (products) => {
    //将从api处获得的数据存入
    store=products.map((product)=>{
        const{id,
            fields:{featured,name,price,company,colors,image:img},
        }=product;
        const image=img[0].thumbnails.large.url;
        return {id,featured,name,price,company,colors,image}
    }) //store 为一个新数组，原数组中的每个元素都调用一次提供的函数后的返回值组成。
    /*
    const array1 = [1, 4, 9, 16];
    pass a function to map
    const map1 = array1.map(x => x * 2);   
    console.log(map1);
    expected output: Array [2, 8, 18, 32]*/

    setStorageItem('store',store)


};


//搜索功能
const findProduct = (id) => {
    let product=store.find((product)=>product.id===id

    )
    return product
};
export { store, setupStore, findProduct };
