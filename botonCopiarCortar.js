function copiar() {

    var content = document.getElementById('resultado');
    
    content.select();
    document.execCommand('copy');

}

function cortar() {

    var content = document.getElementById('resultado');
    
    content.select();
    document.execCommand('cut');

}
