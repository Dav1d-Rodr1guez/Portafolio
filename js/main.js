function activarTransicion() {
    var parrafos = document.querySelectorAll('#Resume .row .col-md-4 .iconos .descripcion p');
    for (var i = 0; i < parrafos.length; i++) {
        parrafos[i].style.display = (parrafos[i].style.display === 'block') ? 'none' : 'block';
    }
}


function interfaz() {
    const hojaEstilo = document.getElementById("hoja-estilo");

    if (hojaEstilo.getAttribute("href") === "css/style.css") {
        hojaEstilo.setAttribute("href", "css/stylelight.css");
    } else {
        hojaEstilo.setAttribute("href", "css/style.css");
    }

    //cambiar imagen

    const btnInterfaz = document.getElementById("btn-interfaz");
    
    if (btnInterfaz.getAttribute("src") === "img/sol.png") {
        btnInterfaz.setAttribute("src", "img/luna.png");
    } else {
        btnInterfaz.setAttribute("src", "img/sol.png");
    }

    //cambiar logo

    const logo = document.getElementById("logo");
    
    if (logo.getAttribute("src") === "img/logo1.png") {
        logo.setAttribute("src", "img/logo2.png");
    } else {
        logo.setAttribute("src", "img/logo1.png");
    }

    //cambiar icono de whatsapp

    const icono= document.getElementById("whatsapp");
    
    if (icono.getAttribute("src") === "img/whatsaap1.png") {
        icono.setAttribute("src", "img/whatsaap2.png");
    } else {
        icono.setAttribute("src", "img/whatsaap1.png");
    }

    //cambiar icono de lineas

    const lineas= document.getElementById("lineas");
    
    if (lineas.getAttribute("src") === "img/lineas1.png") {
        lineas.setAttribute("src", "img/lineas2.png");
    } else {
        lineas.setAttribute("src", "img/lineas1.png");
    }
}
