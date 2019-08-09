//-------------Produits Femme-----------------
var time = 3000;

var pF = 0;
var PanF = [];
PanF[0] = 'img/femme/PANTALONS/pantalon2.jpg';
PanF[1] = 'img/femme/PANTALONS/pantalon3.jpg';
PanF[2] = 'img/femme/PANTALONS/pantalon4.jpg';

var jF = 0;
var jeansF = [];
jeansF[0] = 'img/femme/JEANS/jean2.jpg';
jeansF[1] = 'img/femme/JEANS/jean3.jpg';
jeansF[2] = 'img/femme/JEANS/jean4.jpg';

var cF = 0;
var CheF = [];
CheF[0] = 'img/femme/CHEMISIERS/chemisier1.jpg';
CheF[1] = 'img/femme/CHEMISIERS/chemisier3.jpg';
CheF[2] = 'img/femme/CHEMISIERS/chemisier4.jpg';

var topF = 0;
var toptopsF = [];
toptopsF[0] = 'img/femme/HAUTS/haut2.jpg';
toptopsF[1] = 'img/femme/HAUTS/haut3.jpg';
toptopsF[2] = 'img/femme/HAUTS/haut4.jpg';

var tsF = 0;
var teeF = [];
teeF[0] = 'img/femme/HAUTS/haut2.jpg';
teeF[1] = 'img/femme/HAUTS/haut3.jpg';
teeF[2] = 'img/femme/HAUTS/haut4.jpg';

var PuF = 0;
var pullF = [];
pullF[0] = 'img/femme/PULLS/pull2.jpg';
pullF[1] = 'img/femme/PULLS/pull3.jpg';
pullF[2] = 'img/femme/PULLS/pull4.jpg';

var vF = 0;
var vesteF = [];
vesteF[0] = 'img/femme/VESTES/veste2.jpg';
vesteF[1] = 'img/femme/VESTES/veste3.jpg';
vesteF[2] = 'img/femme/VESTES/veste4.jpg';

var chF = 0;
var chaussuresF = [];
chaussuresF[0] = 'img/femme/CHAUSSURES/chaussures2.jpg';
chaussuresF[1] = 'img/femme/CHAUSSURES/chaussures3.jpg';
chaussuresF[2] = 'img/femme/CHAUSSURES/chaussures4.jpg';

var manF = 0;
var manteauxF = [];
manteauxF[0] = 'img/femme/MANTEAUX/manteau2.jpg';
manteauxF[1] = 'img/femme/MANTEAUX/manteau3.jpg';
manteauxF[2] = 'img/femme/MANTEAUX/manteau1.jpg';

var aF = 0;
var accessF = [];
accessF[0] = 'img/femme/ACCESSOIRES/ceinture2.jpg';
accessF[1] = 'img/femme/ACCESSOIRES/montre2.jpg';
accessF[2] = 'img/femme/ACCESSOIRES/ceinture1.jpg';

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
    document.jeansF.src = jeansF[jF];
    if (jF < jeansF.length - 1) {
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
    document.topsF.src = toptopsF[topF];
    if (topF < toptopsF.length - 1) {
        topF++
    } else {
        topF = 0
    }

    setTimeout("changeImg14()", time);
}

function changeImg15() {
    document.tshirtF.src = teeF[tsF];
    if (tsF < teeF.length - 1) {
        tsF++
    } else {
        tsF = 0
    }

    setTimeout("changeImg15()", time);
}

function changeImg16() {
    document.pullF.src = pullF[PuF];
    if (PuF < pullF.length - 1) {
        PuF++
    } else {
        PuF = 0
    }

    setTimeout("changeImg16()", time);
}

function changeImg17() {
    document.vesteF.src = vesteF[vF];
    if (vF < vesteF.length - 1) {
        vF++
    } else {
        vF = 0
    }

    setTimeout("changeImg17()", time);
}

function changeImg18() {
    document.chaussuresF.src = chaussuresF[chF];
    if (chF < chaussuresF.length - 1) {
        chF++
    } else {
        chF = 0
    }

    setTimeout("changeImg18()", time);
}

function changeImg19() {
    document.manteauxF.src = manteauxF[manF];
    if (manF < manteauxF.length - 1) {
        manF++
    } else {
        manF = 0
    }

    setTimeout("changeImg19()", time);
}

function changeImg20() {
    document.accessF.src = accessF[aF];
    if (aF < accessF.length - 1) {
        aF++
    } else {
        aF = 0
    }

    setTimeout("changeImg20()", time);
}

window.onload = function() {
    changeImg11(), changeImg12(), changeImg13(), changeImg14(), changeImg15(), changeImg16(), changeImg17(), changeImg18(), changeImg19(), changeImg20()
};