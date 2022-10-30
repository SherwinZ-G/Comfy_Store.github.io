import { getElement } from './utils.js';

const toggle=getElement('.toggle-nav')
const overlay=getElement('.sidebar-overlay')
const cancel=getElement('.sidebar-close')
toggle.addEventListener('click',function(){
    overlay.classList.add('show')

})
cancel.addEventListener('click',function(){
    overlay.classList.remove('show')
})
