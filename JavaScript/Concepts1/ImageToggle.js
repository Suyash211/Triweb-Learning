let image = document.querySelector('img');
let page = document.querySelector('html');

page.onclick = function(){
    let originalSrc = image.getAttribute('src');
    if(originalSrc == 'img1.jpeg'){
        image.setAttribute('src','img2.jpeg');
    }
    else{
        image.setAttribute('src','img1.jpeg');
    }
}