// Creare una form per chiedere all'utente il suo nome cognome, i km da percorrere e l'età

const formBtn = document.getElementById("form-btn");
console.log(formBtn);
formBtn.addEventListener("click",
    function() {
        // prelievo input utente
        const userInfo = document.getElementById("user").value;
        console.log(userInfo);

        const userKm = document.getElementById("user-km").value;
        console.log(userKm);

        const userAge = document.getElementById("user-age").value;
        console.log(userAge);

        // Calcola il prezzo del biglietto (0,21 euro al km)

        let initPrice = userKm * 0.21;
        console.log(initPrice);

        
        // Se l'età del passeggero è minore di 18 anni si applica uno sconto del 20%
        // Se l'età del passeggero è maggiore di 65 anni si applica uno sconto del 40%

        let userDiscount;
        if (userAge == `minorenne`) {
            userDiscount = (initPrice * 20) / 100;
        }
        else if (userAge == `over65`) {
            userDiscount = (initPrice * 40) / 100;
        }
        else {
            userDiscount = 0;
        }

        console.log(userDiscount);

        // Sottrai al prezzo del biglietto lo sconto da applicare

        let userPrice = initPrice - userDiscount;

        console.log(userPrice, typeof(userPrice));

        // Approssima il costo del biglietto a due decimali

        let resultPrice = userPrice;
        resultPrice = resultPrice.toFixed(2);

        console.log(resultPrice);

        // visualizzo nella pagina le risposte dell'utente

        // Info passeggero
        const userNameSurname = document.querySelector(".info p");
        console.log(userNameSurname);
        userNameSurname.innerHTML = `${userInfo}`;

        // Offerta

        let discountName;
        if (userAge == `minorenne`) {
            discountName = `Sconto Minorenni`;
        }
        else if (userAge == `over65`) {
            discountName = `Sconto Silver`;
        }
        else {
            discountName = `Biglietto Standard`;
        }

        const ticketType = document.querySelector(".user-ticket p");
        console.log(ticketType);
        ticketType.innerHTML = `${discountName}`;


        // Carrozza
        let infoCab = Math.floor(Math.random() * 10 ) + 1;

        const cabNum = document.querySelector(".cab p");
        console.log(cabNum);
        cabNum.innerHTML = `${infoCab}`;

        // Codice CP
        let infoCp = Math.floor(Math.random() * 9999 ) + 90000;

        const cpNum = document.querySelector(".cp-code p");
        console.log(cpNum);
        cpNum.innerHTML = `${infoCp}`;

        // Costo Ticket
        const userTicket = document.querySelector(".ticket-price p");
        console.log(userTicket);
        userTicket.innerHTML = `${resultPrice}`;

        // - far vedere il blocco delle risposte
        const resultContainer = document.querySelector(".result");
        console.log(resultContainer);
        resultContainer.classList.remove("d-none");

    }
);

const formClearBtn = document.getElementById("form-clear-btn");
console.log(formClearBtn);

formClearBtn.addEventListener("click", 
    function() {
        
        // Nascondo result container
        const resultContainer = document.querySelector(".result");
        resultContainer.classList.add("d-none");

        // Ripulsco i campi
        const userInfo = document.getElementById("user-ns");
        console.log(userInfo);
        userInfo.value = "";

    }
);