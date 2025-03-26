var btn = document.querySelector('button');

var percent = document.querySelector('#percent');
var growth = document.querySelector('#growth');

var grow=0;
btn.addEventListener('click', function(){
     var int = setInterval(() => {
          grow++
          percent.innerHTML = grow+"%";
          growth.style.width = grow+'%';
          btn.innerHTML = "Downloading...";

     }, 50);

     setTimeout(() => {
          clearInterval(int);
          btn.innerHTML = 'Downloaded';
          btn.style.opacity = .5;
          
     },5000);
})
