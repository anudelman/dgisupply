var catTab = document.querySelector('.tab.cat');
var mfgTab = document.querySelector('.tab.mfg');

catTab.addEventListener("click", function(){
    (this).classList.add('selected');
    mfgTab.classList.remove('selected');
});

mfgTab.addEventListener("click", function(){
    (this).classList.add('selected');
    catTab.classList.remove('selected');
});