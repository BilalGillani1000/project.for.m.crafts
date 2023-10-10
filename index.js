var alertdisplay=true;
$(".dismiss").click(function () {
    if (alertdisplay==true) {
        $("#alert").slideUp();
        alertdisplay==false;
    }
});