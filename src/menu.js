import './menu.css';


function menuTab(){
let menuDiv = document.createElement('div');
menuDiv.id = 'menuDiv';

let menuBox = document.createElement('div');
menuBox.id = 'menuBox';

const pizza1 = document.createElement('div');
pizza1.innerText = 'New York-Style Pizza';


const pizza2 = document.createElement('div');
pizza2.innerText = 'Sicilian Pizza';


const pizza3 = document.createElement('div');
pizza3.innerText = 'California Pizza';



const pizza4 = document.createElement('div');
pizza4.innerText = 'Detroit Pizza';


const pizza5 = document.createElement('div');
pizza5.innerText = 'St. Louis Pizza';




menuDiv.appendChild(menuBox);

menuBox.append(pizza1, pizza2, pizza3, pizza4, pizza5);

let menuBoxArray = [...menuBox.children];

menuBoxArray.forEach(Element => Element.classList.add('menuItem'));



return contentBody.appendChild(menuDiv);
}


export {menuTab};