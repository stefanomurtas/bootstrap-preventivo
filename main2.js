// 1prendo valore codice promozionale
// 2 prendo tipo di lavoro
// 3 tarifa base  a seconda lavoro
//  creare condizione per dare il valore di prezzo al tipo di lavoro
// aggiungere valore per il numero delle ore che in questo caso sarà 10 
// aggiungere tutte variabili che potrebbero essere scelte dal cliente

// ricerco la select con id


// const elementoSelezionato = document.getElementById('tipoLavoro');


// // ricevo il valore iniziale della select (Seleziona il tipo di lavoro)
// // console.log(mySelect.value)

// elementoSelezionato.addEventListener('change', function () {
//     let sviluppoBackend = 22.50;
//     let sviluppoFrontend = 15.30;
//     let analisiProgetto = 33.60;
//     let oreLavoro = 10;

//     const valoreSelezione = Number(elementoSelezionato.value);


//     if (valoreSelezione === "backend") {

//         valoreSelezione = sviluppoBackend * oreLavoro;
//         console.log(valoreSelezione);

//     } else if (valoreSelezione === "frontend")
//     {
//         valoreSelezione = sviluppoFrontend * oreLavoro;
//         console.log(valoreSelezione);
//     } 
//     else if (valoreSelezione === "analisiProgettuale")
//     {
//         valoreSelezione = analisiProgetto * oreLavoro;
//         console.log(valoreSelezione);
//     }
//     else {
//         document.getElementById("result").innerHTML ="selezionare un tipo di lavoro";
//         return;
//     }
// }
// )
// codice non funzionante

// inzio prova 2



// document.getElementById("esegui").addEventListener('click', calcoloCosto);

// function calcoloCosto() {
    
//     // costante tipo lavoro deve contenere l'id html per giungere al primo collegamento
//     const lavoroTipo = document.getElementById("tipoLavoro").value;
//     // costante oreLavoro (in questa inseriamo il valore 10 prefissato nella richista dell'esercizio)
//     const oreLavoro = 10;
//     // pagaOraia (variabile vuota per contenere il valore di un ora di lavoro per ogni tipologia di servizio)
//     let pagaOraria = 0;

//     // logica 1 (se il lavoro selezionato è frontend l'importo sarà ..)
//     if (lavoroTipo === "frontend") {
//         pagaOraria = 22.50;
//         // logica 2(se il lavoro selezionato è backend l'importo sarà ..)
//     } else if (lavoroTipo === "backend") {
//         pagaOraria = 15.30;
//         // logica 3 (se il lavoro selezionato è analisiProgettuale l'importo sarà ..)
//     } else if (lavoroTipo === "analisiProgettuale") {
//         pagaOraria = 33.60;
//         // logica 4 (nel caso nela quale non fosse stato selezionata nessuna delle 3 messaggio "selezionare un tipo di lavoro anzichè il risulato")
//     } else {
//         window.alert("selezionare un tipo di lavoro")
//     }
//     // creata nuova variabile per contenere il risulato della moltiplicazione tra ore e tipo lavoro selezionato
//     const spesaTotale = oreLavoro * pagaOraria;
//     // riceercare il risultato nel html e creare il risultato al suo interno
//     document.getElementById("risultato").innerText = ` €${spesaTotale.toFixed(2)}`;
    

// }
// assegnato a formCalcolo l'id del form
const formCalcolo= document.getElementById("calcolo");
// all'id assegno l'evento dopo il click sul bottone la funzione che mi permette di non riagiornare la pagina
document.getElementById("calcolo").addEventListener('submit', function (event){

    event.preventDefault();

 calcoloCosto() 




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
        window.alert("selezionare un tipo di lavoro");
        return;

    }
    // creata nuova variabile per contenere il risulato della moltiplicazione tra ore e tipo lavoro selezionato
    const spesaTotale = oreLavoro * pagaOraria;
    // riceercare il risultato nel html e creare il risultato al suo interno
    document.getElementById("risultato").innerText = ` €${spesaTotale.toFixed(2)}`;
}
})