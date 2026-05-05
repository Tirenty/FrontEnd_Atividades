function revelar(){

    if (document.getElementById("tabelaJogos")) {
        return;
    }

    let img = document.createElement("img");

    img.src = "img/Tabela_Jogos.png";
    img.id = "tabelaJogos";

    img.style.marginTop = "20px";
    img.style.maxWidth = "50%";
    img.style.borderRadius = "10px";

    document.body.appendChild(img);
}  
