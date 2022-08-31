/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


function showFilials() {
    document.getElementById("fills").classList.toggle("show");
}
function showCouriers() {
    document.getElementById("cours").classList.toggle("show");
}
function showSettings() {
    document.getElementById("settings").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.show_fill_btn')) {
        var fillials = document.getElementsByClassName("fills-content");
        for (var i = 0; i < fillials.length; i++) {
            var openFill = fillials[i];
            if (openFill.classList.contains('show')) {
                openFill.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.show_cour_btn')) {
        var cours = document.getElementsByClassName("cours-content");
        for (var i = 0; i < cours.length; i++) {
            var openCour = cours[i];
            if (openCour.classList.contains('show')) {
                openCour.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.show_setting_btn')) {
        var settings = document.getElementsByClassName("settings-content");
        for (var i = 0; i < settings.length; i++) {
            var openSett = settings[i];
            if (openSett.classList.contains('show')) {
                openSett.classList.remove('show');
            }
        }
    }

}

