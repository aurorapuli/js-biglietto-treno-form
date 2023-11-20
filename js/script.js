// selezione degli imput user

const inputName = document.querySelector(".nomeUser");

const inputKm = document.querySelector(".kmPercorsi");

const inputEta = document.querySelector(".eta");

const sendButton = document.getElementById ("send");

let nomeUser;

let kmPercorsi;

let eta;

let risultato

const prezzo = (inputKm * 0,21);
console.log (prezzo );


if (inputEta < 18){
    risultato = (prezzo * 0,80);
    console.log(risultato);
    
} else if (inputEta > 65){
    risultato = (prezzo * 0,20);
    console.log(risultato);

} else{
    risultato = prezzo
}





sendButton.addEventListener("click" ,

  function () {
    nomeUser = inputName.value;
    console.log(nomeUser);


    kmPercorsi = parseInt(inputKm.value);
    console.log(kmPercorsi);

    eta = parseInt(inputEta.value);
    console.log(eta);   

  }
);







