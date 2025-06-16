
const inicioNamoro = new Date("2021-06-15T00:00:00");
function atualizarContador() {
    const agora = new Date();
    const diff = agora - inicioNamoro;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);
    const diasRestantes = dias - (anos * 365) - (meses * 30);

    document.getElementById("contador").innerText =
        `Estamos juntos há ${anos} ano(s), ${meses} mês(es) e ${diasRestantes} dia(s)!`;
}
atualizarContador();
setInterval(atualizarContador, 60000);
