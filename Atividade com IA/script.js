const bicho = document.getElementById("parado");
const comendo = document.getElementById("comendo");

const estados = {
    normal: "Parado.png",
    clicado: "Comendo.png",
    alimentado: "Feliz.png",
    fome30: "Bravo.png",
    fome60: "Morto.png",
}

let contador = 0;
let intervalo = null;
let time_Click = null;
let time_Out = null;


function init_cont (){
    if(intervalo) clearInterval(intervalo);

    intervalo = setInterval(()=>{
        if(contador < 40){
            contador++;
            console.log("Tempo: ", contador);

            if(contador == 20){
                bicho.src = estados.fome30;
            }

            if(contador == 40){
                bicho.src = estados.fome60;

    		document.getElementById('btn-biscoito').classList.add('hidden');
    		document.getElementById('btn-reviver').classList.remove('hidden');
            }
        }
    }, 1000);
}

function alimentar (){
    if(contador < 40){
        bicho.src = estados.clicado;
        contador = 0;
        console.log("Comendo");

        if(time_Click) clearInterval(time_Click)

            time_Click = setTimeout(()=>{
                bicho.src = estados.alimentado;

                time_Out = setTimeout(()=>{
                    bicho.src = estados.normal;
                }, 1000);
            }, 1000);
    }
}

function reviver() {

    contador = 0;
    bicho.src = estados.normal;

    document.getElementById('btn-reviver').classList.add('hidden');
    document.getElementById('btn-biscoito').classList.remove('hidden');

    init_cont();

    console.log("O bichinho reviveu!");
}

init_cont();