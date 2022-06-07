//function for openning the door
function openDoor(){
    //opening door
    var door = document.getElementById("front");
    door.style.setProperty("margin-top","150px");
    door.style.setProperty("transform","skewY(45deg)");
    door.style.setProperty("width","100px");
    door.style.setProperty("transition-duration","5s");
    //releasing inside form to the outside
    var fm = document.getElementById("form");
    fm.style.setProperty("margin-top","100px");
    fm.style.setProperty("margin-left","0px");
    fm.style.setProperty("transition-duration","5s");
}

//function for closing the door
function closing(){
    //closing the door
    var door = document.getElementById("front");
    door.style.setProperty("margin-top","100px");
    door.style.setProperty("transform","skewY(0deg)");
    door.style.setProperty("width","400px");
    door.style.setProperty("transition-duration","5s");
    //entering form inside the cube
    var fm = document.getElementById("form");
    fm.style.setProperty("margin-top","50px");
    fm.style.setProperty("margin-left","-50px");
    fm.style.setProperty("transition-duration","5s");
}

//HERE WILL BE THE FUNCTION FOR ACCESSING THE GAME NEEDLE

//function for tunning the neddle in the game
function getRangeValue(){
    let ran = document.getElementById("tunnel");
    let val = ran.value;
    let rotate = "rotate"+"("+val+"deg"+")";
    let nd = document.getElementById("needle-tree");
    nd.style.setProperty("transform",String(rotate));
};

//function for shooting button
function shootBall(){
    var bal = document.getElementById("ball");
    bal.style.setProperty("margin-top","400px");
    bal.style.setProperty("opacity","0.2");
    bal.style.setProperty("transition-delay","1s");
    bal.style.setProperty("transition","2s");
    //show refresh button
    var hid = document.getElementById("start");
    hid.style.display="block";
    //work on tree shandler
    var tree = document.getElementById("itself");
    tree.style.setProperty("margin-top","-20px");
    tree.style.setProperty("transition-duration","100ms");
    //function for testing winner or looser player
    function testing(){
        let ran = document.getElementById("tunnel");
        let val = ran.value;
        if(val > 45 && val <= 50){
            var los = document.getElementById("w-l");
            los.textContent="You Won Bro!!";
            los.style.setProperty("width","400px");
            los.style.setProperty("height","50px");
            los.style.setProperty("font-size","40px");
            los.style.setProperty("animation","winning 2s infinite");
            los.style.setProperty("transition-duration","1px");
            los.style.setProperty("transition-delay","2s");
        }
        else if(val > 90 && val <= 95){
            var los = document.getElementById("w-l");
            los.textContent="You Won Bro!!";
            los.style.setProperty("width","400px");
            los.style.setProperty("height","50px");
            los.style.setProperty("font-size","40px");
            los.style.setProperty("animation","winning 2s infinite");
            los.style.setProperty("transition-duration","1px");
            los.style.setProperty("transition-delay","2s");
            
        }
        else if(val > 180 && val <= 185){
            var los = document.getElementById("w-l");
            los.textContent="You Won Bro!!";
            los.style.setProperty("width","400px");
            los.style.setProperty("height","50px");
            los.style.setProperty("font-size","40px");
            los.style.setProperty("animation","winning 2s infinite");
            los.style.setProperty("transition-duration","1px");
            los.style.setProperty("transition-delay","2s");
            
        }
        else if(val > 185 && val <= 190){
            var los = document.getElementById("w-l");
            los.textContent="You Won Bro!!";
            los.style.setProperty("width","400px");
            los.style.setProperty("height","50px");
            los.style.setProperty("font-size","40px");
            los.style.setProperty("animation","winning 2s infinite");
            los.style.setProperty("transition-duration","1px");
            los.style.setProperty("transition-delay","2s");
            
        }
        else if(val > 215 && val <= 220){
            var los = document.getElementById("w-l");
            los.textContent="You Won Bro!!";
            los.style.setProperty("width","400px");
            los.style.setProperty("height","50px");
            los.style.setProperty("font-size","40px");
            los.style.setProperty("animation","winning 2s infinite");
            los.style.setProperty("transition-duration","1px");
            los.style.setProperty("transition-delay","2s");
            
        }
        else if(val > 270 && val <= 275){
            var los = document.getElementById("w-l");
            los.textContent="You Won Bro!!";
            los.style.setProperty("width","400px");
            los.style.setProperty("height","50px");
            los.style.setProperty("font-size","40px");
            los.style.setProperty("animation","winning 2s infinite");
            los.style.setProperty("transition-duration","1px");
            los.style.setProperty("transition-delay","2s");
            
        }
        else if(val > 315 && val <= 320){
            var los = document.getElementById("w-l");
            los.textContent="You Won Bro!!";
            los.style.setProperty("width","400px");
            los.style.setProperty("height","50px");
            los.style.setProperty("font-size","40px");
            los.style.setProperty("animation","winning 2s infinite");
            los.style.setProperty("transition-duration","1px");
            los.style.setProperty("transition-delay","2s");
            
        }
        else if(val == 355){
            var los = document.getElementById("w-l");
            los.textContent="You Won Bro!!";
            los.style.setProperty("width","400px");
            los.style.setProperty("height","50px");
            los.style.setProperty("font-size","40px");
            los.style.setProperty("animation","winning 2s infinite");
            los.style.setProperty("transition-duration","1px");
            los.style.setProperty("transition-delay","2s");
            
        }
        else{
            var los = document.getElementById("w-l");
            los.textContent="You Loose!";
            los.style.setProperty("width","400px");
            los.style.setProperty("height","50px");
            los.style.setProperty("font-size","40px");
            los.style.setProperty("transition-duration","1px");
            los.style.setProperty("transition-delay","2s");
        }
    }
    //call test function bellow
    testing();
}
function waiting(){
    var tree = document.getElementById("itself");
    tree.style.setProperty("margin-top","-50px");
    tree.style.setProperty("transition-duration","1s");
}

//function for starting again
function start(){
    var sDown = document.getElementById("w-l");
    sDown.style.setProperty("width","0px");
    sDown.style.setProperty("height","0px");
    sDown.style.setProperty("transition-delay","1ms");
    sDown.style.setProperty("transition-duration","1ms");
    var hid = document.getElementById("start");
    hid.style.display="none";
    //backing ball to the origin
    var bal = document.getElementById("ball");
    bal.style.setProperty("margin-top","205px");
    bal.style.setProperty("opacity","1");
    bal.style.setProperty("transition-delay","1s");
    bal.style.setProperty("transition","2s");
}
