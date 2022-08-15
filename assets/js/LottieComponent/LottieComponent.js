class LottieClass {

    constructor(_json) {
        //Validación entrada tipo Objeto o JSON
        if (typeof _json == 'object') {
            _json = _json;
        } else if (typeof _json == 'string') {
            _json = JSON.parse(_json);
        }
        //Asignación de valores por entrada y Valores por defecto
        this.Divid = _json.Divid?.toString() || 'newDivId';
        this.Divclass = _json.Divclass?.toString() || 'content-NewDiv';
        this.HostDiv = _json.HostDiv;
        this.lottieId = _json.lottieId?.toString() || 'lottie-player';
        this.lottieClass = _json.lottieClass?.toString() || 'newLottie-Player';
        this.lottieSrc = _json.lottieSrc;
        this.lottieSpeed = _json.lottieSpeed?.toString() || '1';
        this.lottieLoop = _json.lottieLoop?.valueOf() || false;
        this.lottieControls = _json.lottieControls?.valueOf() || false;
    }

    generarLottie() {

        //Creación del Contenedor Lottie
        var newDiv = document.createElement('div');
        newDiv.id = this.Divid;
        newDiv.className = this.Divclass;
        //Agregación del Div al HostDiv
        $(this.HostDiv).append(newDiv);
        //Atributos css
        $('#' + this.Divid).css({
            "width": "100%",
            "height": "100%",
        });

        //Creación del Lottie
        var lottiePlayer = document.createElement('lottie-player');
        lottiePlayer.id = this.lottieId;
        lottiePlayer.className = this.lottieClass;
        //Agregación del Lottie al HostDiv
        $('#' + this.Divid).append(lottiePlayer);
        //Asignación de atributos
        $('#' + this.lottieId).attr({
            "src": this.lottieSrc, //Fuente tipo JSON
            "speed": this.lottieSpeed, //Velocidad de la animación
            "loop": this.lottieLoop, //Si/No Bucle de la animación
            "autoplay": true, //Si/No Reproduce al iniciar la función
            "controls": this.lottieControls, //Si/No controles de la animación
            "background": "transparent" //Color de fondo de la animación
        });
        //Atributos css (Default)
        $('#' + this.lottieId).css({
            "width": "100%",
            "height": "100%",
        });
    }
}

