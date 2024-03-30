function activarTransicion() {
    var parrafos = document.querySelectorAll('#Resume .row .col-md-4 .iconos .descripcion p');
    for (var i = 0; i < parrafos.length; i++) {
        parrafos[i].style.display = (parrafos[i].style.display === 'block') ? 'none' : 'block';
    }
}
