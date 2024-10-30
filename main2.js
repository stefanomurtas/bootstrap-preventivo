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

function calcoloCosto (){
    // costante tipo lavoro deve contenere l'id html per giungere al primo collegamento
    const tipoLavoro =document.getElementById("tipoLavoro").value; 
    // costante oreLavoro (in questa inseriamo il valore 10 prefissato nella richista dell'esercizio)
    const oreLavoro =10;
    // pagaOraia (variabile vuota per contenere il valore di un ora di lavoro per ogni tipologia di servizio)
    let pagaOraria = 0;
}
if (tipoLavoro === "frontend" ){
    pagaOraria= 22.50;
    console.log (pagaOraria)
}
