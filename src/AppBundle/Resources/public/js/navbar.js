$(document).ready(function () {
    // Script permettant d'ajouté la class active au link de navbar séléctionné, sauf si la class existe déjà pour le lien
    var $ancres = $('.ancre');
    var $menuDropdown = $('#menu-dropdown');
    var $navbar = $('#navbar');
    $ancres.on('click', function (event) {
        event.preventDefault();
        if($(this).hasClass('active') === false){
            $ancres.removeClass('active');
            $(this).addClass('active');
        }
        if($menuDropdown.css('display') !== 'none'){
            //    $menuDropdown est affiché, cela signifie qu'on utilise un smartphone
            // On cache le menu au clique
            $navbar.css('display', 'none')
        }
        // scroll lent
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000)
    })

//    event pour affichage du menu
    $menuDropdown.on('click', function () {
        if($navbar.css('display') === "none"){
            $navbar.css('display', 'block')
        }else{
            $navbar.css('display', 'none')
        }
    })

    $("#more").on('click', function () {

        // scroll lent
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000)
    })

    // event on scroll
    $(window).scroll(function(){
        // Si on est sur mobile est que le menu est ouvert, on le ferme
        if($menuDropdown.css('display') !== 'none' && $navbar.css('display') !== 'none'){
            $navbar.css('display', 'none');
        }
        // si le scroll ne descends pas plus pas que la hauteur de l'écran, on enleve toutes class active
        if($(window).scrollTop() < $(window).height()){
        $ancres.removeClass('active');
        }else{
            // On boucle sur tous les liens de la navbar pour voir lequel doit être activé
            $ancres.each(function () {
                var elt = $($(this).attr('href'));
            if(elt.position().top <= $(window).scrollTop() && (elt.position().top + elt.height()) >= $(window).scrollTop()){
                    if($(this).hasClass('active') === false){
                        $ancres.removeClass('active');
                        $(this).addClass('active');
                    }
                }
            })
        }

    })
})
