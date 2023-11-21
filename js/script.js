// selezione degli imput user

const inputName = document.querySelector(".nomeUser");

const inputKm = document.querySelector(".kmPercorsi");

const inputEta = document.querySelector(".eta");

const sendButton = document.getElementById ("send");

const closeButton = document.getElementById ("close");

let nomeUser;

let kmPercorsi;

let eta;

let risultato


sendButton.addEventListener("click" ,

  function () {
    nomeUser = inputName.value;
    // console.log(nomeUser);
    
    kmPercorsi = parseInt(inputKm.value);
    // console.log(kmPercorsi);

    eta = parseInt(inputEta.value);
    // console.log(eta);   

    const prezzo = (inputKm.value * 0.21);
    

if (inputEta.value < 18){
    risultato = (prezzo * 0.80);
    risultato = risultato.toFixed(2);
    document.querySelector(".offerta").innerHTML = "Biglietto Minorenni";
    // console.log(risultato);
    
} else if (inputEta.value > 65){
    risultato = (prezzo * 0.60);
    risultato = risultato.toFixed(2);
    document.querySelector(".offerta").innerHTML = "Biglietto Over 65";
    // console.log(risultato);

} else{
    risultato = prezzo
    risultato = risultato.toFixed(2);
    document.querySelector(".offerta").innerHTML = "Biglietto Standard";
    // console.log(risultato);
}

    document.querySelector(".name").innerHTML = nomeUser;
    document.querySelector(".costo").innerHTML = risultato + "€";
    document.querySelector(".carrozza").innerHTML = 5;
    document.querySelector(".codiceCp").innerHTML= 100;
    document.getElementById("biglietto").style.display = "block";
  }

);



closeButton.addEventListener("click" ,
  
    function(){
        document.getElementById("biglietto").style.display = "none";
    }



);









