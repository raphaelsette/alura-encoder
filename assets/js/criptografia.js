const inputEntrada = document.getElementById('input-entrada');
const inputSaida = document.getElementById('input-saida');

function sweetAlertToast(tipoAlerta, mensagemAlerta) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: tipoAlerta,
        title: mensagemAlerta
    });
}
function criptografar() {
    const msgEntrada = inputEntrada.value.trim();
    if (!msgEntrada) {
        sweetAlertToast('error', 'Digite um texto para criptografar.');
    } else {
        const msgCriptografada = msgEntrada
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        inputSaida.value = msgCriptografada;
        sweetAlertToast('success', 'O texto foi criptografado.');
    }
}
function descriptografar() {
    const msgEntrada = inputEntrada.value.trim();
    if (!msgEntrada) {
        sweetAlertToast('error', 'Digite um texto para descriptografar.');
    } else {
        const msgDescriptografada = msgEntrada
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        inputSaida.value = msgDescriptografada;
        sweetAlertToast('success', 'O texto foi descriptografado.');
    }
}
function copiar() {
    const copiarInputSaida = document.getElementById('input-saida');
    copiarInputSaida.select();
    document.execCommand("copy");
    sweetAlertToast('success', 'O texto foi copiado.');
}