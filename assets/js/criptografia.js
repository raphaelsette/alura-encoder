const inputEntrada = document.getElementById('input-entrada');
const inputSaida = document.getElementById('input-saida');

function criptografar() {
    const msgEntrada = inputEntrada.value.trim();
    if (!msgEntrada) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Digite um texto para criptografar.",
            confirmButtonColor: "#3085d6"
        });
    } else {
        const msgCriptografada = msgEntrada
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        inputSaida.value = msgCriptografada;
    }
}
function descriptografar() {
    const msgEntrada = inputEntrada.value.trim();
    if (!msgEntrada) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Digite um texto para descriptografar.",
            confirmButtonColor: "#3085d6"
        });
    }
    const msgDescriptografada = msgEntrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    inputSaida.value = msgDescriptografada;
}
function copiar() {
    const copiarInputSaida = document.getElementById('input-saida');
    copiarInputSaida.select();
    document.execCommand("copy");
    Swal.fire({
        icon: "success",
        title: "Copiado",
        confirmButtonColor: "#3085d6"
    });
}