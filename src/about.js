import './about.css';

function aboutTab(){
    const aboutDiv = document.createElement('div');
    aboutDiv.id = 'aboutDiv';

    const infoDiv = document.createElement('div');
    infoDiv.id = 'infoDiv';

    infoDiv.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem adipisci tenetur at impedit nihil cupiditate placeat, harum quae, corporis ut tempore aliquid nobis. Molestias sit, provident impedit id eum doloribus asperiores. Dolor quo quae, cupiditate ipsum minus quasi nobis aut ea sequi iure quidem expedita cum voluptas, impedit dicta deserunt!';

    aboutDiv.appendChild(infoDiv);

    return contentBody.appendChild(aboutDiv);
}

export{aboutTab};