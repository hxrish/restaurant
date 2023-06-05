import './style.css'; 
import { menuTab } from './menu';
import { homeTab } from './home';
import { aboutTab } from './about';

window.onload = function(){
    contentBody.appendChild(homeTab());
}

const contentBox = document.getElementById('content');

const navContainer = document.createElement('div');
navContainer.id = 'navContainer';

const logoContainer = document.createElement('div');
logoContainer.id = 'logoContainer';
const mainLogoContainer = document.createElement('div');
mainLogoContainer.id = 'mainLogoContainer';

const navMenuContainer = document.createElement('div');
navMenuContainer.id = 'navMenuContainer';
const home = document.createElement('div');
home.id = 'home';
const homeContainer = document.createElement('div');
home.classList.add('navMenuItem');
home.innerText = 'Home';
const menu = document.createElement('div');
menu.classList.add('navMenuItem');
menu.id = 'menu';
const menuContainer = document.createElement('div');
menu.innerText = 'Menu';
const about = document.createElement('div');
const aboutContainer = document.createElement('div');
about.id = 'about';
about.classList.add('navMenuItem');
about.innerText = 'About';


const contentBody = document.createElement('div');
contentBody.id = 'contentBody';






contentBox.appendChild(navContainer);
contentBox.appendChild(contentBody);


navContainer.appendChild(logoContainer);
navContainer.appendChild(navMenuContainer);

logoContainer.appendChild(mainLogoContainer);

homeContainer.appendChild(home);
menuContainer.appendChild(menu);
aboutContainer.appendChild(about);

navMenuContainer.appendChild(homeContainer);
navMenuContainer.appendChild(menuContainer);
navMenuContainer.appendChild(aboutContainer);


home.addEventListener('click', () => {
})

menuContainer.addEventListener('click', () => {
    if (contentBody.firstChild != ''){
        contentBody.innerHTML = '';
    }
    contentBody.appendChild(menuTab());
})

homeContainer.addEventListener('click', () => {
    if (contentBody.firstChild != ''){
        contentBody.innerHTML = '';
    }
    contentBody.appendChild(homeTab())
})

aboutContainer.addEventListener('click', () => {
    if (contentBody.firstChild != ''){
        contentBody.innerHTML = '';
    }
    contentBody.appendChild(aboutTab())
})
