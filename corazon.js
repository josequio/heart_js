const imgCorazon = document.querySelector('.img-corazon');
console.log("imgCorazon");

const measure = ['100px','80px'];

let i = 0;
setInterval(function(){
    imgCorazon.style.width = measure[i];
    imgCorazon.style.height = measure[i];
    i++;
    if(i == measure.length){
        i = 0;
    }
},500);
