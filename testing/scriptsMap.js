//Clicking on the Planets
function gnomelink() {
window.alert("If you're seeing this it works");
window.location.replace("../theeternalgnome")
}


//Arrow Keys/Movement
function leftArrowPressed() {
    var element = document.getElementById("../images/Ship.png");
    element.style.left = parseInt(element.style.left) - 10 + 'px';
    }

    function rightArrowPressed() {
    var element = document.getElementById("../images/Ship.png");
    element.style.left = parseInt(element.style.left) + 10 + 'px';

    }

    function upArrowPressed() {
    var element = document.getElementById("../images/Ship.png)";
    element.style.top = parseInt(element.style.top) - 10 + 'px';
    }

    function downArrowPressed() {
    var element = document.getElementById("../images/Ship.png");
    element.style.top = parseInt(element.style.top) + 10 + 'px';
    }

    function moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
            leftArrowPressed();
            break;
            case 39:
            rightArrowPressed();
            break;
            case 38:
            upArrowPressed();
            break;
            case 40:
            downArrowPressed();
            break;
            }
        };

function docReady()
{
  
  window.addEventListener('keydown', moveSelection);
}
