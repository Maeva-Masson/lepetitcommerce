
//-------------Page tous les Produits Femme-----------------
var time = 3000;

var pF = 0;
var PanF = [];
PanF[0] = 'img/femme/PANTALONS/pantalon2.jpg';
PanF[1] = 'img/femme/PANTALONS/pantalon3.jpg';
PanF[2] = 'img/femme/PANTALONS/pantalon4.jpg';

var jF = 0;
var jeans_F = [];
jeans_F[0] = 'img/femme/JEANS/jean2.jpg';
jeans_F[1] = 'img/femme/JEANS/jean3.jpg';
jeans_F[2] = 'img/femme/JEANS/jean4.jpg';

var cF = 0;
var CheF = [];
CheF[0] = 'img/femme/CHEMISIERS/chemisier1.jpg';
CheF[1] = 'img/femme/CHEMISIERS/chemisier3.jpg';
CheF[2] = 'img/femme/CHEMISIERS/chemisier4.jpg';

var topF = 0;
var tops_F = [];
tops_F[0] = 'img/femme/HAUTS/haut2.jpg';
tops_F[1] = 'img/femme/HAUTS/haut3.jpg';
tops_F[2] = 'img/femme/HAUTS/haut4.jpg';

var rb = 0;
var rob = [];
rob[0] = 'img/femme/ROBES/robe1.jpg';
rob[1] = 'img/femme/ROBES/robe2.jpg';
rob[2] = 'img/femme/ROBES/robe3.jpg';

var PuF = 0;
var pull_F = [];
pull_F[0] = 'img/femme/PULLS/pull2.jpg';
pull_F[1] = 'img/femme/PULLS/pull3.jpg';
pull_F[2] = 'img/femme/PULLS/pull4.jpg';

var vF = 0;
var veste_F = [];
veste_F[0] = 'img/femme/VESTES/veste2.jpg';
veste_F[1] = 'img/femme/VESTES/veste3.jpg';
veste_F[2] = 'img/femme/VESTES/veste4.jpg';

var chF = 0;
var chaussures_F = [];
chaussures_F[0] = 'img/femme/CHAUSSURES/chaussures2.jpg';
chaussures_F[1] = 'img/femme/CHAUSSURES/chaussures3.jpg';
chaussures_F[2] = 'img/femme/CHAUSSURES/chaussures4.jpg';

var manF = 0;
var manteaux_F = [];
manteaux_F[0] = 'img/femme/MANTEAUX/manteau2.jpg';
manteaux_F[1] = 'img/femme/MANTEAUX/manteau3.jpg';
manteaux_F[2] = 'img/femme/MANTEAUX/manteau1.jpg';

var aF = 0;
var accessoiresF = [];
accessoiresF[0] = 'img/femme/ACCESSOIRES/ceinture2.jpg';
accessoiresF[1] = 'img/femme/ACCESSOIRES/montre2.jpg';
accessoiresF[2] = 'img/femme/ACCESSOIRES/ceinture1.jpg';

function changeImg11() {
    document.pantalonsF.src = PanF[pF];
    if (pF < PanF.length - 1) {
        pF++
    } else {
        pF = 0
    }

    setTimeout("changeImg11()", time);
}

function changeImg12() {
    document.jeansF.src = jeans_F[jF];
    if (jF < jeans_F.length - 1) {
        jF++
    } else {
        jF = 0
    }

    setTimeout("changeImg12()", time);
}

function changeImg13() {
    document.chemisiersF.src = CheF[cF];
    if (cF < CheF.length - 1) {
        cF++
    } else {
        cF = 0
    }

    setTimeout("changeImg13()", time);
}

function changeImg14() {
    document.topsF.src = tops_F[topF];
    if (topF < tops_F.length - 1) {
        topF++
    } else {
        topF = 0
    }

    setTimeout("changeImg14()", time);
}

function changeImg15() {
    document.robes.src = rob[rb];
    if (rb < rob.length - 1) {
        rb++
    } else {
        rb = 0
    }

    setTimeout("changeImg15()", time);
}

function changeImg16() {
    document.pullF.src = pull_F[PuF];
    if (PuF < pull_F.length - 1) {
        PuF++
    } else {
        PuF = 0
    }

    setTimeout("changeImg16()", time);
}

function changeImg17() {
    document.vesteF.src = veste_F[vF];
    if (vF < veste_F.length - 1) {
        vF++
    } else {
        vF = 0
    }

    setTimeout("changeImg17()", time);
}

function changeImg18() {
    document.manteauxF.src = manteaux_F[manF];
    if (manF < manteaux_F.length - 1) {
        manF++
    } else {
        manF = 0
    }

    setTimeout("changeImg18()", time);
}

function changeImg19() {
    document.chaussuresF.src = chaussures_F[chF];
    if (chF < chaussures_F.length - 1) {
        chF++
    } else {
        chF = 0
    }

    setTimeout("changeImg19()", time);
}

function changeImg20() {
    document.accessF.src = accessoiresF[aF];
    if (aF < accessoiresF.length - 1) {
        aF++
    } else {
        aF = 0
    }

    setTimeout("changeImg20()", time);
}

window.onload = function() {
    changeImg11(), changeImg12(), changeImg13(), changeImg14(), changeImg15(), changeImg16(), changeImg17(), changeImg18(), changeImg19(), changeImg20()
};

//-------------Page Description: Pantalons Femme-----------------


// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the header
// var descript_art = document.getElementById("description");

// // Get the offset position of the navbar
// var sticky = descript_art.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     descript_art.classList.add("sticky");
//   } else {
//     descript_art.classList.remove("sticky");
//   }
// }

// $(function(){
// 	$(window).scroll(
// 	function () {
// 	if ($(this).scrollTop() > 520 && $(this).scrollTop()< 2200 ) { 
// 	$('#description').addClass("fixdroite"); 
// 	} else{
//     $('#description').removeClass("fixdroite");
//     }
// 					}
// 				);			 
//             });
            
                        




