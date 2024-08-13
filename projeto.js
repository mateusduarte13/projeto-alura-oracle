var imagemRemovida = false;

function criptografar() {
    var inputTexto = document.getElementById('inputTexto').value;
    
    if (/^[a-z ]+$/.test(inputTexto)) {
        var Mensagem = inputTexto.replace(/e/g, "enter")
                                 .replace(/i/g, "imes")
                                 .replace(/a/g, "ai")
                                 .replace(/o/g, "ober")
                                 .replace(/u/g, "ufat");
        document.getElementById('outputTexto').value = Mensagem;
        
         if (!imagemRemovida) {
            var textarea2 = document.getElementById('outputTexto');
            textarea2.classList.add('sem-imagem');
            imagemRemovida = true;
        }
    } else {
        alert("O texto deve conter apenas letras minúsculas, sem acentos ou caracteres especiais.");
    }
}

function descriptografar() {
    var inputTexto = document.getElementById('inputTexto').value;
    var Mensagem = inputTexto.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
    document.getElementById('outputTexto').value = Mensagem;
    
    // Remover imagem apenas se ainda não foi removida
    if (!imagemRemovida) {
        var textarea2 = document.getElementById('outputTexto');
        textarea2.classList.add('sem-imagem');
        imagemRemovida = true;
    }
}