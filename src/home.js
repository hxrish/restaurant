import './home.css';

import Icon from './My\ project.png';

function homeTab(){
    const homeDiv = document.createElement('div');
    homeDiv.id = 'homeDiv';

    const leftSideHome = document.createElement('div');
    leftSideHome.id = 'leftSideHome';

    const leftTextContainer = document.createElement('div');
    leftTextContainer.id = 'leftTextContainer';
    
    const leftTextHeaderContainer = document.createElement('div');
    leftTextHeaderContainer.id = 'leftTextHeaderContainer';
    leftTextHeaderContainer.innerText = 'Pizza Slice';

    const leftTextDescriptionContainer = document.createElement('div');
    leftTextDescriptionContainer.id = 'leftTextDescriptionContainer';
    leftTextDescriptionContainer.innerText = 'We serve the slice of happiness.'


    leftTextContainer.appendChild(leftTextHeaderContainer);
    leftTextContainer.appendChild(leftTextDescriptionContainer);


    const rightSideHome = document.createElement('div');
    rightSideHome.id = 'rightSideHome';   


    const homeImageContainer = document.createElement('div');
    homeImageContainer.id = 'homeImageContainer';

    const homeImage = document.createElement('img');
    homeImage.id = 'homeImage';
    homeImage.src = Icon;


    homeDiv.appendChild(leftSideHome);
    homeDiv.appendChild(rightSideHome);

    leftSideHome.appendChild(leftTextContainer);

    rightSideHome.appendChild(homeImageContainer);
    homeImageContainer.appendChild(homeImage);


    return homeDiv
}

export {homeTab}



