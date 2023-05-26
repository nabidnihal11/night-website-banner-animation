function stars(){
    let count = 500;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);

        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        star.style.animationDuration = 5+ duration+ 's';
        star.style.animationDelay = duration+ 's';

        scene.appendChild(star);
        i++

    }
}
stars();






let linkInput = document.getElementById('link-input');
let copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
  linkInput.select();
  document.execCommand('copy');
  

  copyButton.innerText = 'Copied!';
  setTimeout(() => {
    copyButton.innerText = 'Copy Link';
  }, 2000);
});




let user = 'Kor skoa Toksial';

document.write(user.toUpperCase())