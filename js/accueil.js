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


window.onload = function() {
    diapo(), diapo2()
};

$(document).ready(function() {
    $('.btn_news').click(function() {
        $('.tbox').css({ 'width': '260px', 'padding': ' 0 10px' })
    });
})


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
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
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