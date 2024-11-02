function usePromotionalCode() {
    const promtionalCodeValue = $('#nomeUtente').value;
     const tipoLavoroVAlue= $('#tipoLavoro').value;
}

// 1prendo valore codice promozionale
// 2 prendo tipo di lavoro
// 3 tarifa base  a seconda lavoro


//  creare condizione per dare il valore di prezzo al tipo di lavoro
// aggiungere valore per il numero delle ore che in questo caso sarà 10 
// aggiungere tutte variabili che potrebbero essere scelte dal cliente
let sviluppoBackend = 22.50;
let sviluppoFrontend = 15.30;
let analisiProgett = 33.60;

// const oreLavoro = 10
// document.getElementById('tipoLavoro').addEventListener('click', function sceltaLavoro() {
//     const tipoLavoroValue = ('')

//     if (tipoLavoroValue === "backend") {
//         tipoLavoroValue = sviluppoBackend * oreLavoro;
//         alert("prova")
//     } else if (tipoLavoroValue === "frontend") {
//         tipoLavoroValue = sviluppoFrontend * oreLavoro;
//         alert("prova")


//     } else (tipoLavoroValue === "analisiProgettuale"){
//         tipoLavoroValue = analisiProgett * oreLavoro
//         alert("prova")

//     }

// })
// console.log = (tipoLavoroValue)



// prova


// function Modulo() {
// let nome= document.getElementById("nomeUtente").value;


// if ((nome == "") || (nome == "undefined")) {
//     alert("Il campo Nome è obbligatorio.");
//     document.modulo.nome.focus();
//     return false;
//     }
// }

const formCalcolo= document.getElementById("calcolo");



document.getElementById("calcolo").addEventListener('click', function (event){

    event.preventDefault();

 calcoloCosto() 

})


function calcoloCosto() {
    
    // costante tipo lavoro deve contenere l'id html per giungere al primo collegamento
    const lavoroTipo = document.getElementById("tipoLavoro").value;
    // costante oreLavoro (in questa inseriamo il valore 10 prefissato nella richista dell'esercizio)
    const oreLavoro = 10;
    // pagaOraia (variabile vuota per contenere il valore di un ora di lavoro per ogni tipologia di servizio)
    let pagaOraria = 0;

    // logica 1 (se il lavoro selezionato è frontend l'importo sarà ..)
    if (lavoroTipo === "frontend") {
        pagaOraria = 22.50;
        // logica 2(se il lavoro selezionato è backend l'importo sarà ..)
    } else if (lavoroTipo === "backend") {
        pagaOraria = 15.30;
        // logica 3 (se il lavoro selezionato è analisiProgettuale l'importo sarà ..)
    } else if (lavoroTipo === "analisiProgettuale") {
        pagaOraria = 33.60;
        // logica 4 (nel caso nela quale non fosse stato selezionata nessuna delle 3 messaggio "selezionare un tipo di lavoro anzichè il risulato")
    } else {
        window.alert("selezionare un tipo di lavoro")
    }
    // creata nuova variabile per contenere il risulato della moltiplicazione tra ore e tipo lavoro selezionato
    const spesaTotale = oreLavoro * pagaOraria;
    // riceercare il risultato nel html e creare il risultato al suo interno
    document.getElementById("risultato").innerText = ` €${spesaTotale.toFixed(2)}`;
}