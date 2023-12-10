/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
} 

/* lo de las cuatro lineas para HOME y demas me falla y no se por que, lo he mirado en  w3schools y lo tengo igual */