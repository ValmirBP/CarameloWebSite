function send() {

    var link = "mailto:valmir.barros57@yahoo.com.br" +
        "&subject=" + encodeURIComponent("Solicitação de orçamento") +
        "&body=" + encodeURIComponent(document.getElementById('cMessage').value) +
        encodeURIComponent(" ") +
        encodeURIComponent(" Meu contato é, ") +
        encodeURIComponent(document.getElementById('cNome').value) +
        encodeURIComponent(" ") +
        encodeURIComponent("Telefone:") +
        encodeURIComponent(document.getElementById('cPhone').value);
    window.location.href = link;
}