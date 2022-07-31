function scrollText() {
    if ($('#scrollText').hasClass('disableExpandir')) {
        $('#scrollText').removeClass('disableExpandir');
        $('#scrollText').addClass('enableExpandir');
        $('#buttonTextHeader').text('Ocultar...');
    }
    else {
        $('#scrollText').removeClass('enableExpandir');
        $('#scrollText').addClass('disableExpandir');
        $('#buttonTextHeader').text('Seguir leyendo...');
    }
}