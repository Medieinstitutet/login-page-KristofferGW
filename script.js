document.body.style.backgroundColor = "black";
document.body.style.color = "white";

let usernames = "Janne";
let passwords ="test";

// KOLLA OM ANVÄNDAREN ÄR INLOGGAD MED HJÄLP AV LOCAL STORAGE
if (localStorage.getItem("loggedInOrNot")) {
    console.log("Det finns något i LS");
    //Hämta inloggade användare i localStorage
    let loggedInOrNot = JSON.parse(localStorage.getItem("loggedInOrNot"));

    //Kolla att den inloggade användaren är matchad mot users med funktionen isUserRegistered();

    // Kalla på loggedInMenu();

    // Kalla på loggedInMain();

} else {
    console.log("Det finns inget i LS");
    notLoggedInMenu();

    notLoggedInMain();
};

function notLoggedInMenu() {
    //Skapa inputs för användarnamn och lösenord i main.
    const nameField = document.createElement("input");
    menu.appendChild(nameField);
    const passField = document.createElement("input");
    menu.appendChild(passField);

    //Skapa logga in knapp med eventListener.
    const logInBtn = document.createElement("button");
    logInBtn.innerText = "Logga in"
    menu.appendChild(logInBtn);
        //När användaren klickar på knappen, kolla att användarnamn och lösenord finns som användare med isUserRegistered();
        //OM användaren är registererad, kalla på loggedInMenu(); och loggedInMain();
        //OM användaren inte är registerarad, kalla på incorrectLogIn();
    logInBtn.addEventListener("click", () => {
        console.log("Klick på logInBtn");
        if (isUserRegistered()) {
            loggedInMenu();
            loggedInMain();
        } else {
            incorrectLogIn();
        }
    });

}

function notLoggedInMain() {
    console.log("Console log från notLoggedInMain");
    let main = document.getElementById("main");
    main.innerText = "Hej! Vänligen logga in med ditt användarnamn och lösenord ovan.";
}

function isUserRegistered(usernames, passwords) {
    //kolla att användaramn och lösenord som användaren angivit finns i arrayen users och passwords. Returnera true eller false.
    const nameField = document.createElement("input");
    const passField = document.createElement("input");
    if (nameField.value === usernames && passField.value === passwords) {
        console.log("Du har angivit rätt inlogg");
    } else {
        incorrectLogIn();
    }
}

function loggedInMenu() {
    //Skapa logga ut-knapp

    //eventListener på knappen som tömmer localStorage och kallar på notLoggedInMenu() och notLoggedInMain().
}

function loggedInMain() {
    //Hälsa på användaren med namn.
}

function incorrectLogIn() {
    //Tala om för användaren att de angivit fel användarnamn eller lösenord.
    console.log("Console log från incorrectLogIn()");
    let main = document.getElementById("main");
    main.innerText = "Användarnamnet eller lösenordet är felaktigt. Vänligen försök igen.";
}