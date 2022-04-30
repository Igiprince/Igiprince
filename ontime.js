function show(){
    var elem = document.getElementById("text-details");
    elem.style.display="block";
};
/*this hang on privacy-space*/
function Pshow(){
    var elem1 = document.getElementById("privacy-space");
    elem1.style.display="block";
    elem1.style.position = 'absolute';
    elem1.style.background = 'whitesmoke';
};
function phide(){
    var elem1 = document.getElementById("privacy-space");
    elem1.style.display="none";
};
/*this hang on acount-space*/
function ashow(){
    var elem1 = document.getElementById("acount-space");
    elem1.style.display="block";
    elem1.style.position = 'absolute';
    elem1.style.background = 'whitesmoke';
};
function ahide(){
    var elem1 = document.getElementById("acount-space");
    elem1.style.display="none";
};
/*this hang on guide-space*/
function gshow(){
    var elem1 = document.getElementById("guide-space");
    elem1.style.display="block";
    elem1.style.position = 'absolute';
    elem1.style.background = 'whitesmoke';
};
function ghide(){
    var elem1 = document.getElementById("guide-space");
    elem1.style.display="none";
};
/*this hang on designer-space*/
function dshow(){
    var elem1 = document.getElementById("designer-space");
    elem1.style.display="block";
    elem1.style.position = 'absolute';
    elem1.style.background = 'whitesmoke';
};
function dhide(){
    var elem1 = document.getElementById("designer-space");
    elem1.style.display="none";
};
function timing(){
    var dt = new Date();
    var timelement = document.getElementById("time-tag");
    timelement.textContent= dt.toLocaleTimeString(dt);
    var hour = dt.getHours();
    var mins = dt.getMinutes();
    var welcomer = document.getElementById("welcome");
    var greet = document.getElementById("greeting");
    var t = document.getElementById("time-get");
    if(hour >= 12 && hour < 18 && mins >=0){
        welcomer.style.setProperty("background","url(aftern.jpg)");
        welcomer.style.backgroundSize = 'cover';
        welcomer.style.backgroundPosition = 'center';
        welcomer.style.backgroundRepeat = 'no-repeat';
        welcomer.style.color = 'pink';
        welcomer.style.boxShadow = '1px 1px 5px 1px pink';
        greet.textContent = 'GOOD EVENING';
        t.style.color = 'pink';
    }else if( hour >= 18 && mins >=0 ){
        welcomer.style.setProperty("background","url(evening.jpg)");
        welcomer.style.backgroundSize = 'cover';
        welcomer.style.backgroundPosition = 'center';
        welcomer.style.backgroundRepeat = 'no-repeat';
        welcomer.style.color = 'pink';
        welcomer.style.boxShadow = '1px 1px 5px 1px pink';
        greet.textContent = 'GOOD NIGHT';
        t.style.color = 'pink';
    }else if( hour >= 18 && mins >=0 ){
        welcomer.style.setProperty("background","url(hugenight.jpg)");
        welcomer.style.backgroundSize = 'cover';
        welcomer.style.backgroundPosition = 'center';
        welcomer.style.backgroundRepeat = 'no-repeat';
        welcomer.style.color = 'pink';
        welcomer.style.boxShadow = '1px 1px 5px 1px pink';
        greet.textContent = 'GOOD NIGHT';
        t.style.color = 'pink';
    }else if(  hour == 12 && mins >= 0 && mins < 59){
        welcomer.style.setProperty("background","url(lunch1.jpg)");
        welcomer.style.backgroundSize = 'cover';
        welcomer.style.backgroundPosition = 'center';
        welcomer.style.backgroundRepeat = 'no-repeat';
        welcomer.style.color = 'pink';
        welcomer.style.boxShadow = '1px 1px 5px 1px pink';
        greet.textContent = 'HAVE GOOD LUNCH!';
        t.style.color = 'black';
    }	
};
setInterval(timing,1000);