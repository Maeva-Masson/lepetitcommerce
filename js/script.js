/* *****  PAGE ACCEUIL ***** */

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


window.onload = function() {
    diapo(), diapo2()
};








/* *****  NAV 2 / PAGE PANTALONS HOMME ***** */

$(document).ready(function() {
    $('.menu2').click(function() {
        $('ul').slideToggle(200);
    });
    $('.access_h').click(function() {
        $('.sous_menu_h a ').slideToggle(200)
    });

    $('.access_f').click(function() {
        $('.sous_menu_f a ').slideToggle(200)
    });
    $('.nav2_toggle').click(function() {
        $('this a ').slideToggle(200)
    });
    $('#toggle_Social').click(function() {
        $('#Social_logo').slideToggle(200);
    });
    $('#toggle_infos').click(function() {
        $('#infos_liste').slideToggle(200);
    });
    $('#toggle_news').click(function() {
        $('#news_p').slideToggle(200);
    });
    $('#pantalon1').click(function() {
        $('#card-body1').slideToggle(200);
    });
    $('#pantalon2').click(function() {
        $('#card-body2').slideToggle(200);
    });
    $('#pantalon3').click(function() {
        $('#card-body3').slideToggle(200);
    });
    $('#casual1').click(function() {
        $('#card-body4').slideToggle(200);
    });
    $('#casual2').click(function() {
        $('#card-body5').slideToggle(200);
    });
    $('#casual3').click(function() {
        $('#card-body6').slideToggle(200);
    });
    $('#costume1').click(function() {
        $('#card-body7').slideToggle(200);
    });
    $('#costume2').click(function() {
        $('#card-body8').slideToggle(200);
    });
    $('#costume3').click(function() {
        $('#card-body9').slideToggle(200);
    });
    $('#brut1').click(function() {
        $('#card-body10').slideToggle(200);
    });
    $('#brut2').click(function() {
        $('#card-body11').slideToggle(200);
    });
    $('#brut3').click(function() {
        $('#card-body12').slideToggle(200);
    });
})

/* ****** slider prix ******* */

$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
            $("#amount").val("€" + ui.values[0] + " - €" + ui.values[1]);
        }
    });
    $("#amount").val("€" + $("#slider-range").slider("values", 0) +
        " - €" + $("#slider-range").slider("values", 1));
});


/* ***** PAGE TOUS LES PRODUITS HOMME ***** */

var time = 3000;

var p = 0;
var Pan = [];
Pan[0] = 'img/Homme/pantalons/pantalon_beige1.jpg';
Pan[1] = 'img/Homme/pantalons/pantalon_blanc1.jpg';
Pan[2] = 'img/Homme/pantalons/pantalon_bleu2.jpg';

var j = 0;
var jeans = [];
jeans[0] = 'img/Homme/jean/jean_bleu4.jpg';
jeans[1] = 'img/Homme/jean/jean_gris1.jpg';
jeans[2] = 'img/Homme/jean/jean_noir2.jpg';

var c = 0;
var Che = [];
Che[0] = 'img/Homme/Chemises/chemise_orange4.jpg';
Che[1] = 'img/Homme/Chemises/chemise_verte4.jpg';
Che[2] = 'img/Homme/Chemises/chemise_blanche1.jpg';

var h = 0;
var hauts = [];
hauts[0] = 'img/Homme/tshirts/bunny1.jpg';
hauts[1] = 'img/Homme/tshirts/polo_bleu1.jpg';
hauts[2] = 'img/Homme/tshirts/polo_rayé_blanc5.jpg';

var Pu = 0;
var pull = [];
pull[0] = 'img/Homme/pull/pull_orange3.jpg';
pull[1] = 'img/Homme/pull/pull_blanc3.jpg';
pull[2] = 'img/Homme/pull/pull_pacman3.jpg';
pull[3] = 'img/Homme/pull/sweat_sable3.jpg';

var v = 0;
var veste = [];
veste[0] = 'img/Homme/manteau/veste_orange5.jpg';
veste[1] = 'img/Homme/manteau/trench_beige6.jpg';
veste[2] = 'img/Homme/manteau/cuir_rouge2.jpg';
veste[3] = 'img/Homme/manteau/veste_daim_beige6.jpg';

var ch = 0;
var chaussures = [];
chaussures[0] = 'img/Homme/chaussures/ville_brun1.jpg';
chaussures[1] = 'img/Homme/chaussures/espadrille2.jpg';
chaussures[2] = 'img/Homme/chaussures/basket_noire2.jpg';
chaussures[3] = 'img/Homme/chaussures/mocasin_noir3.jpg';

var b = 0;
var bonnet = [];
bonnet[0] = 'img/Homme/bonnet/bonnet_bleu2.jpg';
bonnet[1] = 'img/Homme/casquette/casquette_beige1.jpg';
bonnet[2] = 'img/Homme/bonnet/bonnet_noir3.jpg';
bonnet[3] = 'img/Homme/casquette/casquette_bleu_motif1.jpg';

var s = 0;
var sac = [];
sac[0] = 'img/Homme/sac/sac_noir1.jpg';
sac[1] = 'img/Homme/sac/sac_bowling_maron3.jpg';
sac[2] = 'img/Homme/sac/sac_bowling1.jpg';
sac[3] = 'img/Homme/sac/sac_brun3.jpg';

var a = 0;
var access = [];
access[0] = 'img/Homme/accessoires/montre_noire3.jpg';
access[1] = 'img/Homme/accessoires/solaire3.jpg';
access[2] = 'img/Homme/accessoires/ceinture_bleu1.jpg';
access[3] = 'img/Homme/accessoires/croco_noir3.jpg';

function changeImg() {
    document.pantalons.src = Pan[p];
    if (p < Pan.length - 1) {
        p++
    } else {
        p = 0
    }

    setTimeout("changeImg()", time);
}

function changeImg2() {
    document.jeans.src = jeans[j];
    if (j < jeans.length - 1) {
        j++
    } else {
        j = 0
    }

    setTimeout("changeImg2()", time);
}

function changeImg3() {
    document.chemises.src = Che[c];
    if (c < Che.length - 1) {
        c++
    } else {
        c = 0
    }

    setTimeout("changeImg3()", time);
}

function changeImg4() {
    document.hauts.src = hauts[h];
    if (h < hauts.length - 1) {
        h++
    } else {
        h = 0
    }

    setTimeout("changeImg4()", time);
}

function changeImg5() {
    document.pull.src = pull[Pu];
    if (Pu < pull.length - 1) {
        Pu++
    } else {
        Pu = 0
    }

    setTimeout("changeImg5()", time);
}

function changeImg6() {
    document.veste.src = veste[v];
    if (v < veste.length - 1) {
        v++
    } else {
        v = 0
    }

    setTimeout("changeImg6()", time);
}

function changeImg7() {
    document.chaussures.src = chaussures[ch];
    if (ch < chaussures.length - 1) {
        ch++
    } else {
        ch = 0
    }

    setTimeout("changeImg7()", time);
}

function changeImg8() {
    document.bonnet.src = bonnet[b];
    if (b < bonnet.length - 1) {
        b++
    } else {
        b = 0
    }

    setTimeout("changeImg8()", time);
}

function changeImg9() {
    document.sac.src = sac[s];
    if (s < sac.length - 1) {
        s++
    } else {
        s = 0
    }

    setTimeout("changeImg9()", time);
}

function changeImg10() {
    document.access.src = access[a];
    if (a < access.length - 1) {
        a++
    } else {
        a = 0
    }

    setTimeout("changeImg10()", time);
}
window.onload = function() {
    changeImg(), changeImg2(), changeImg3(), changeImg4(), changeImg5(), changeImg6(), changeImg7(), changeImg8(), changeImg9(), changeImg10()
};