

// assegnato a formCalcolo l'id del form
const formCalcolo= document.getElementById("calcolo");
// all'id assegno l'evento dopo il click sul bottone la funzione che mi permette di non riagiornare la pagina
document.getElementById("calcolo").addEventListener('submit', function (event){

    event.preventDefault();

 calcoloCosto() 

 scontoPrezzo()


});

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
    document.getElementById("risultato").innerText = ` Il totale è €${spesaTotale.toFixed(2)}`;
}



function scontoPrezzo(){

const codPromzionale= document.getElementById("codPromo").value;
let prezzoScontato=parseFloat( document.getElementById("risultato").innerText);
 const codiciSc =[ "YHDNU32" , " JANJC63" , "SJDP096" ] ;
 let prezzoFinale =prezzoScontato;

if (codiciSc.includes(codPromzionale)){

  prezzoFinale= prezzoScontato* 0.75;
    
}
document.getElementById("risultato").innerText = ` il totale è €${prezzoFinale.toFixed(2)}`
}