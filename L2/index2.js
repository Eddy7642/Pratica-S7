// scripts.js
document.addEventListener("DOMContentLoaded", function () {                    //L'evento viene emesso quando tutto l'HTML del documento è stato caricato e analizzato dal browser. 
    // Recupera il tempo trascorso precedentemente
    let Time = parseInt(sessionStorage.getItem('Time')) || 0;                  //parseInt mi ridà il numero intero convertendo getItem (stringa)  < ---- > Storage memorizza dati

    function updateTimerDisplay() {
        const hours = String(Math.floor(Time / 3600)).padStart(2, '0');             //padStart formatta numeri a 2 cifre (aggiunge 0 a dx e sx)
        const minutes = String(Math.floor((Time % 3600) / 60)).padStart(2, '0');
        const seconds = String(Time % 60).padStart(2, '0');
        document.getElementById('timer-display').textContent = hours + ':' + minutes + ':' + seconds;
    }

    // Inizialmente mostra il timer corretto
    updateTimerDisplay();

    // Funzione per aggiornare il contatore ogni secondo
    setInterval(function () {                                               //Incrementa elapsedTime.
        Time++;                                                              //Salva il nuovo valore in sessionStorage usando sessionStorage.setItem.                                                            //Aggiorna il display del timer chiamando updateTimerDisplay.
        sessionStorage.setItem('Time', Time);                               //ogni 1000 millisicondi (1 secondo)
        updateTimerDisplay();                                               //Aggiorna il display del timer chiamando updateTimerDisplay.
    }, 1000);
});

