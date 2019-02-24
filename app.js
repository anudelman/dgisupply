// Switch between category and manufacturer tabs

var catTab = document.querySelector('.tab.cat');
var mfgTab = document.querySelector('.tab.mfg');
var mfgList = document.querySelector('ul.mfg');
var catList = document.querySelector('ul.cat');
var divider = document.querySelector('.divider');

// category tab selected
catTab.addEventListener("click", function(){
    (this).classList.add('selected');
    mfgTab.classList.remove('selected');
    mfgList.classList.add('hide');
    catList.classList.remove('hide');
    divider.classList.add('left');
    divider.classList.remove('right');
});

// manufacturer tab selected
mfgTab.addEventListener("click", function(){
    (this).classList.add('selected');
    catTab.classList.remove('selected');
    mfgList.classList.remove('hide');
    catList.classList.add('hide');
    divider.classList.remove('left');
    divider.classList.add('right');
});

