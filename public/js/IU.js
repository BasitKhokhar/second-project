AOS.init();

// bachelor tooltip data JS//
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
// Master tooltip data JS//
var masterbutton=document.querySelector(".mastertooltipdata");
var masterdata=document.querySelector(".master-tooltip-data");
masterbutton.addEventListener('click',function(){
    masterdata.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'masterbutton' && e.target.id !== 'mastertooltip'){
        masterdata.style.display='none';
    }
    else{
        masterdata.style.display='block';
    }
});
//  tooltip data JS//
var masterbutton=document.querySelector(".mastertooltipdata");
var masterdata=document.querySelector(".master-tooltip-data");
masterbutton.addEventListener('click',function(){
    masterdata.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'masterbutton' && e.target.id !== 'mastertooltip'){
        masterdata.style.display='none';
    }
    else{
        masterdata.style.display='block';
    }
});
// MBA tooltip data JS//
var MBAbutton=document.querySelector(".mbatooltipdata");
var MBAdata=document.querySelector(".mba-tooltip-data");
MBAbutton.addEventListener('click',function(){
    MBAdata.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'mbabutton' && e.target.id !== 'mbatooltip'){
        MBAdata.style.display='none';
    }
    else{
        MBAdata.style.display='block';
    }
});
// About tooltip data JS//
var aboutbutton=document.querySelector(".about-tooltipdata");
var aboutdata=document.querySelector(".about-tooltip-data");
  aboutbutton.addEventListener('click',function(){
    aboutdata.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'abouttooltip' && e.target.id !== 'abouttooltipdata'){
        aboutdata.style.display='none';
    }
    else{
        aboutdata.style.display='block';
    }
});
// Campus tooltip data JS//
var campusbutton=document.querySelector(".oncampus-tooltipdata");
var campusdata=document.querySelector(".oncampus-tooltip-data");
campusbutton.addEventListener('click',function(){
    campusdata.style.display='block';
});
window.addEventListener('click',function(e) {
    console.log(e.target);
    if(e.target.id !== 'oncampustooltip' && e.target.id !== 'oncampustooltipdata'){
        campusdata.style.display='none';
    }
    else{
        campusdata.style.display='block';
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

