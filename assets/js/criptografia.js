function criptografar() {
    var msg = document.getElementById('entrada-texto').value;
    let novamsg = msg.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    parent.document.getElementById('saida-texto').value = novamsg;
}
    function descriptografar() {
    var msg = document.getElementById('entrada-texto').value;
    let novamsg = msg.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    parent.document.getElementById('saida-texto').value = novamsg;
}
function copiar() {
    var copiarmsg = document.getElementById('saida-texto');
    copiarmsg.select();
    document.execCommand("copy");
    alert("Copiado com Sucesso!");
}