  
const colorPins = ["red", "green", "blue", "yellow", "brown","orange","black","white"];

var curRow = 8;
var grid = document.getElementById("gridContainer");
var pins = document.getElementById("pins");

startGame(4, false);
function startGame(rows, useSameColor){
    var gridRows = [];
    this.code = [];

    while(code.length < rows){
        gridRows.push(" 50px");
        var check = colorPins[Math.floor(Math.random() * colorPins.length)]
        if(code.includes(check) && useSameColor == false){
           console.log("The code is properly connected to HTML.");
        }else{
           code.push(check);
        }
    }
        for(var r = 0; r < rows; r++){
            grid.style.gridTemplateColumns+= gridRows[r];

            for(var c = 0; c < 8; c++){
                var item = document.createElement("div");
                item.classList += "item";
                var colorHole = document.createElement("button");
                colorHole.classList += "itemRound";
                grid.appendChild(item);
                item.appendChild(colorHole);
            }
        }
        curRow = 8;
        checkOrMake = true;
        checkRow();
    }

var checkOrMake;
code.reverse();
function checkRow(){
    if(checkOrMake){
        if(curRow > 0){
            for(var n = 1; n < 5; n++){
                grid.children[(curRow * 4) - n].id = "pos" + n;
                grid.children[(curRow * 4) - n].firstChild.setAttribute("onClick", "setColor(this)");
                checkOrMake = false;
            }
        }else{
            alert("you lose: no more rows left!");
            reset();
        }
    }else{
        var curPin = 0;
        var redPins = 0;
        for(var r = 1; r < 5; r++){
            var cur = grid.children[(curRow * 4) - r].firstChild;
            cur.classList.remove("itemRound");
            var curString = cur.classList.toString();
            cur.classList.add("itemRound");

            if(curString == code[(r -1)]){
                pins.children[(curRow-1)].children[curPin].classList += ' red';
                curPin++;
                redPins++;

            }else if(code.includes(curString)){
                pins.children[(curRow-1)].children[curPin].classList += ' white';
                curPin++;
            }
            cur.setAttribute("onClick", "");
        }
        checkOrMake = true;
        curRow--;
        if(redPins >= 4){ 
            alert("You win!");
            reset();
        }
        checkRow();
    }
}

var selectedColor;
function colorSelect(color){
    if(colorPins.includes(color)){
        selectedColor = color;
    }
}
function setColor(element){
    if(selectedColor != null){
        element.classList = "itemRound " + selectedColor;
    }
}

function reset(){
    var restart = prompt("play again?\n type 'no' to exit\n type anyting to restart")
    if(restart != "no" && restart != "No" && restart != "NO"){
        grid.innerHTML = "";
        grid.style = '';
        startGame(4, false);
        for(var p = 1; p < 10; p++){
            for(var c = 0; c < 4; c++)
            pins.children[(p-1)].children[c].classList = 'helpPins';
        }
    }
}