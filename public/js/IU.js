AOS.init();

var bachelorbutton=document.querySelector(".bachelortooltipdata");
var bachelordata=document.querySelector(".bachelor-tooltip-data");
bachelorbutton.addEventListener('click',function(){
    bachelordata.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'bach-data-button' && e.target.id !== 'bachelortooltip'){
        bachelordata.style.display='none';
    }
    else{
        bachelordata.style.display='block';
    }
});

var topbarbutton=document.querySelector('.menu1');
var topbardata=document.querySelector('.top-list');
var closetopbar=document.getElementById('closetopbar');
topbarbutton.addEventListener('click',function(){
    topbardata.style.display='block' //&& topbarbutton.style.display=='none';
});
// topbarbutton.addEventListener('click',function(){
//     topbarbutton.classList.add('menu-display');
// });
closetopbar.addEventListener('click',function(){
    topbardata.style.display='none' //&& topbarbutton.style.display=='block';
});

