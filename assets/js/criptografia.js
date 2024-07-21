function criptografar() {
    const msg = document.getElementById('entrada-texto').value.trim();
    if (!msg) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Digite um texto para criptografar.",
            confirmButtonColor: "#3085d6"
        });
    } else {
        let novamsg = msg.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        parent.document.getElementById('saida-texto').value = novamsg;
    }
}
function descriptografar() {
    const msg = document.getElementById('entrada-texto').value.trim();
    if (!msg) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Digite um texto para descriptografar.",
            confirmButtonColor: "#3085d6"
        });
    }
    let novamsg = msg.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    parent.document.getElementById('saida-texto').value = novamsg;
}
function copiar() {
    const copiarmsg = document.getElementById('saida-texto');
    copiarmsg.select();
    document.execCommand("copy");
    Swal.fire({
        icon: "success",
        title: "Copiado",
        confirmButtonColor: "#3085d6"
    });
}