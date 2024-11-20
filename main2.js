

let spesaTotale = 0;

// assegnato a formCalcolo l'id del form
const formCalcolo = document.getElementById("calcolo");
// all'id assegno l'evento dopo il click sul bottone la funzione che mi permette di non riagiornare la pagina
formCalcolo.addEventListener('submit', function (event) {

    event.preventDefault();

    calcoloCosto();


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
        window.alert("selezionare un tipo di lavoro");
        return;

    }
    // creata nuova variabile per contenere il risulato della moltiplicazione tra ore e tipo lavoro selezionato
    spesaTotale = oreLavoro * pagaOraria;
    //   costante codice promozionale deve contenere l'id html per giungere al collegamento
    const codPromzionale = document.getElementById("codPromo").value;
    // codice sconto validi
    const codiciSc = ["YHDNU32", " JANJC63", "SJDP096"];
    // creato nuova variabile contenente il valore totale del calcolo precedente
    let prezzoFinale = spesaTotale;
    // logica nella quale si ricerca nella input text un codice contenuto nell' array (doppia condizione per fare in modo che anche nel momento nella quale non fosse inserito il codice sconto il calcolo non si blocchi)
    if (codPromzionale) {
        if (codiciSc.includes(codPromzionale)) {
            // calcolo per lo sconto in caso il codice sia valido
            prezzoFinale *= 0.75;

        } else {
            // finestra di uscita in caso non ci sia un codice valido
            window.alert("inserire codice sconto valido");
            return;

        }
    }
    // riceercare il risultato nel html e creare il risultato al suo interno
    document.getElementById("risultato").innerText = ` il totale è €${prezzoFinale.toFixed(2)}`;

}


