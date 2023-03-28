
//21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"
//22) Crea un oggetto con le seguenti proprietà: name, surname, email
//23) Cancella la proprietà email dall'oggetto appena creato
//24) Crea un array contenente 10 stringhe
//25) Mostra in console ogni stringa del precedente array
//26) Crea un array contenente 100 numeri random
//27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato
//28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random
//29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi
//30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore


//es 21 Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"

    let x = "John";
    let y = "Doe";
    console.log(x + " <> " + y);


//22) Crea un oggetto con le seguenti proprietà: name, surname, email


    let user = {
    name: "Edmond",
    surname: "Sheshi",
    email: "edmondsheshi07@gmail.com"
    };


//23) Cancella la proprietà email dall'oggetto appena creato

    delete user.email;


//24) Crea un array contenente 10 stringhe

    let arrayLunga = ["positivo", "epicode", "esercizi", "test", "studia", "imprecazioni", "javaScript", "css", "html", "sfinito"];


//25) Mostra in console ogni stringa del precedente array

    for (let i = 0; i < arrayLunga.length; i++) {
    console.log(arrayLunga[i]);
    }

//26) Crea un array contenente 100 numeri random

    let arrayCentoRandomico = [];
    for (let i = 0; i < 100; i++) {
      let numeroRandom = Math.floor(Math.random() * 100) + 1;
    arrayCentoRandomico.push(numeroRandom);
    }

    for (let a = 0; a < array.length; a++) {
    console.log(arrayCentoRandomico[a]);
    }

//27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato

    function trovaMaxMin(array) {
    let valoreMax = Math.max.apply(null, array);
    let valoreMin = Math.min.apply(null, array);
    console.log("Il valore massimo dell'array è " + valoreMax+ " e il valore minimo è " + valoreMin);
    }

    trovaMaxMin(arrayDiNumeri);

//28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random

    let arrayDiArray = []; 
    for (let i = 0; i < 1; i++) {
    arrayDiArray[i] = [];
    for (let f = 0; f < 10; f++) { 
        arrayDiArray[i][f] = Math.floor(Math.random() * 10);
    }
    }
    console.log("array con array figlio da 10 numeri random:");

    console.log(arrayDiArray);


//29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi


    function getArrayWithMoreElements(arrayPrimo, arraySecondo) {
        if (arrayPrimo.length >= arraySecondo) {
        return arrayPrimo;
        } else {
        return arraySecondo;
        }
        }
        let primoArr = [20, 7, 13];
        let secondoArr = ["soldi", "aereo", "scarpe", "calcetto"];

        let arrayWithMoreElements = getArrayWithMoreElements(primoArr, secondoArr);

        console.log(arrayWithMoreElements); 

//30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore

    let a = [10,20,30,40,60]
    let b = [20,30,40,50]

    function arraySomma(array1, array2){
        let somma1 = 0
        for (let i = 0; i < array1.length; i++) {
            somma1 += array1[i]
        }
        let somma2 = 0
        for (let i = 0; i < array2.length; i++) {
            somma2 += array2[i]
        }
        if (somma1 >= somma2 ) {
            return [somma1,array1]
        } else{
            return [somma2,array2]
        }
        }

        let risultato = arraySomma(x,y);

        console.log(risultato);

//31) Seleziona l'elemento con id "container1" nella pagina

    let container = document.getElementById("container");

//32) Seleziona tutti gli elementi di tipo <td> nella pagina

    let tabella = document.getElementsByTagName("td");

//33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina

    let tabella = document.getElementsByTagName("td");
    for (let i = 0; i < table.length; i++) {
    console.log(table[i].textContent);
    }

//34)  Scrivi una funzione per cambiare il titolo della pagina

    function chambiaTitolo(nuovoTitolo) {
    document.title = nuovoTitolo;
    }
    cambiaTitolo("il nuovo titolo");
    console.log(document.title);

//35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina

    function aggiungiTabella() {
    let tabella = document.querySelector("table");
    let riga = tabella.insertRow(-1);
    let primaCella = riga.insertCell(0);
    let secondaCella = riga.insertCell(1)

    primaCella.innerHTML = "Nuova testo";
    secondaCella.innerHTML = "Nuova testo2";
    }

//36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella

    function aggiungiTesto() {
    let riga = document.querySelectorAll("tr");
    for (let i = 0; i < riga.length; i++) {
        riga[i].classList.add("test")
    }
    }

//37) Scrivi una funzione per aggiungere uno sfondo rosa( modificato da me) a ogni link presente nella pagina

    function aggiungiColoreRosa() {
    let collegamenti = document.getElementsByTagName("a");
    for (let i = 0; i < collegamenti.length; i++) {
        collegamenti[i].style.backgroundColor = "pink";
    }
    }
    aggiungiColoreRosa();

//38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi

    window.onload = function() {
    nuovoElmLista()
    deleteList()
    // addClassTest()
    addTable()
    console.log("Page loaded");}

//39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina


function nuovaLista() {
    let nuovaLista = document.createElement("li")
    nuovaLista.innerText = "Nuovi elementi"
    let lista = document.querySelector("ul")
    lista.appendChild(nuovaLista)
    }
    
//40) Scrivi una funzione per svuotare una lista nella pagina
    
    function puliziaLista() {
    let cancella = document.querySelector("#lista");

    console.log("qui vedo ",puliziaLista);
    
    for (let i = 0; i < puliziaLista.children.length; i++) {
    puliziaLista.children[i].innerText = "";}
    }
