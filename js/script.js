/* *****  PAGE ACCEUIL ***** */

/* img homme /  femme*/


$(document).ready(function() {
    $('.btn_news').click(function() {
        $('.tbox').css({ 'width': '260px', 'padding': ' 0 10px' })
    });
})

/*  tete de gondole */

$(document).ready(function() {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function() {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function() {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function() {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            } else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            } else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            } else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({
                'transform': 'translateX(0px)',
                'width': itemWidth * itemNumbers
            });
            $(this).find(itemClass).each(function() {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        } else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});


/* *****  NAV 2 / PAGE produits HOMME ***** */

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
    $('#chemise1').click(function() {
        $('#card-body1').slideToggle(200);
    });
    $('#chemise2').click(function() {
        $('#card-body2').slideToggle(200);
    });
    $('#chemise3').click(function() {
        $('#card-body3').slideToggle(200);
    });
    $('#chemise4').click(function() {
        $('#card-body4').slideToggle(200);
    });
    $('#chemise5').click(function() {
        $('#card-body5').slideToggle(200);
    });
    $('#chemise6').click(function() {
        $('#card-body6').slideToggle(200);
    });
    $('#chemise7').click(function() {
        $('#card-body7').slideToggle(200);
    });
    $('#chemise8').click(function() {
        $('#card-body8').slideToggle(200);
    });
    $('#chemise9').click(function() {
        $('#card-body9').slideToggle(200);
    });
    $('#chemise10').click(function() {
        $('#card-body10').slideToggle(200);
    });
    $('#chemise11').click(function() {
        $('#card-body11').slideToggle(200);
    });
    $('#chemise12').click(function() {
        $('#card-body12').slideToggle(200);
    });
    $('#chemise13').click(function() {
        $('#card-body13').slideToggle(200);
    });
    $('#chemise14').click(function() {
        $('#card-body14').slideToggle(200);
    });
    $('#chemise15').click(function() {
        $('#card-body15').slideToggle(200);
    });
    $('#haut1').click(function() {
        $('#card-body1').slideToggle(200);
    });
    $('#haut2').click(function() {
        $('#card-body2').slideToggle(200);
    });
    $('#haut3').click(function() {
        $('#card-body3').slideToggle(200);
    });
    $('#haut4').click(function() {
        $('#card-body4').slideToggle(200);
    });
    $('#haut5').click(function() {
        $('#card-body5').slideToggle(200);
    });
    $('#haut6').click(function() {
        $('#card-body6').slideToggle(200);
    });
    $('#haut7').click(function() {
        $('#card-body7').slideToggle(200);
    });
    $('#haut8').click(function() {
        $('#card-body8').slideToggle(200);
    });
    $('#haut9').click(function() {
        $('#card-body9').slideToggle(200);
    });
    $('#haut10').click(function() {
        $('#card-body10').slideToggle(200);
    });
    $('#haut11').click(function() {
        $('#card-body11').slideToggle(200);
    });
    $('#haut12').click(function() {
        $('#card-body12').slideToggle(200);
    });
    $('#haut13').click(function() {
        $('#card-body13').slideToggle(200);
    });
    $('#haut14').click(function() {
        $('#card-body14').slideToggle(200);
    });
    $('#haut15').click(function() {
        $('#card-body15').slideToggle(200);
    });
    $('#pull1').click(function() {
        $('#card-body1').slideToggle(200);
    });
    $('#pull2').click(function() {
        $('#card-body2').slideToggle(200);
    });
    $('#pull3').click(function() {
        $('#card-body3').slideToggle(200);
    });
    $('#pull4').click(function() {
        $('#card-body4').slideToggle(200);
    });
    $('#pull5').click(function() {
        $('#card-body5').slideToggle(200);
    });
    $('#pull6').click(function() {
        $('#card-body6').slideToggle(200);
    });
    $('#pull7').click(function() {
        $('#card-body7').slideToggle(200);
    });
    $('#pull8').click(function() {
        $('#card-body8').slideToggle(200);
    });
    $('#pull9').click(function() {
        $('#card-body9').slideToggle(200);
    });
    $('#pull10').click(function() {
        $('#card-body10').slideToggle(200);
    });
    $('#pull11').click(function() {
        $('#card-body11').slideToggle(200);
    });
    $('#pull12').click(function() {
        $('#card-body12').slideToggle(200);
    });
    $('#pull13').click(function() {
        $('#card-body13').slideToggle(200);
    });
    $('#pull14').click(function() {
        $('#card-body14').slideToggle(200);
    });
    $('#pull15').click(function() {
        $('#card-body15').slideToggle(200);
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