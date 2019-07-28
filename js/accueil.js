/* *****  Page D'accueil****** */

/* img homme /  femme*/
var T = 3000;
var h = 0;
var men = [];
men[0] = 'img/Homme/costume/costume_bleu6.jpg';
men[1] = 'img/Homme/costume/costume_bleu3.jpg';
men[2] = 'img/Homme/costume/costume_bleu1.jpg';
men[3] = 'img/Homme/costume/costume_bleu5.jpg';

var f = 0;
var women = [];
women[0] = 'img/femme/pantalons/pantalon_blanc1.jpg';
women[1] = 'img/femme/pantalons/pantalon_blanc3.jpg';
women[2] = 'img/femme/pantalons/pantalon_blanc5.jpg';
women[3] = 'img/femme/pantalons/pantalon_blanc4.jpg';

function diapo() {
    document.men.src = men[h];
    if (h < men.length - 1) {
        h++
    } else {
        h = 0
    }

    setTimeout("diapo()", T);
}

function diapo2() {
    document.women.src = women[f];
    if (f < women.length - 1) {
        f++
    } else {
        f = 0
    }

    setTimeout("diapo2()", T);
}
$(function() {
    $('img').hover(function() {
        $(this).animate({
            "opacity": "0.2"
        }, {
            queue: false,
            duration: 300
        });

    }, function() {
        $(this).animate({
            "opacity": "1"
        }, {
            queue: false,
            duration: 100
        });

    })

})

window.onload = function() {
    diapo(), diapo2()
};