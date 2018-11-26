console.log('JS');


var toggle = false;
function showSignin() {
    console.log('in login');

    if (toggle !== true) {
        document.getElementById('arrow-up').src  = 'images/caret-arrow-up.png';
    } else {
       document.getElementById('arrow-up').src = 'images/drop-down-arrow.png'; 
    }
    toggle = !toggle; 
}



