document.body.style.backgroundColor = "black";
document.body.style.color = "white";

//Spara userNames och passwords i localStorage
let userNames = ["Janne", "Alice", "Karin"];
let passwords = ["test", "test2", "test3"];

if (!localStorage.getItem("registeredUsers")) {
    fetch("registeredUsers.json")
    .then (res => res.json())
    .then(data => {
        localStorage.setItem("registeredUsers", JSON.stringify(data))
    })
}

if (!localStorage.getItem("savedPasswords")) {
    fetch("savedPasswords.json")
    .then (res => res.json())
    .then(data => {
        localStorage.setItem("savedPasswords", JSON.stringify(data))
    })
}

//Skapa två nya registered user keys i localStorage som sparar den inloggade användaren.

//Skriv om nedan för att kolla efter logedInUser istället för userName
if (localStorage.getItem("userName")) {
    console.log("Det finns något i LS");
    
    loggedInMenu();

    loggedInMain();

} else {
    console.log("Det finns inget i LS");
    notLoggedInMenu();

    notLoggedInMain();
};

function notLoggedInMenu() {
    let nameField = document.createElement("input");
    menu.appendChild(nameField);
    let passField = document.createElement("input");
    menu.appendChild(passField);

    const logInBtn = document.createElement("button");
    logInBtn.innerText = "Logga in"
    menu.appendChild(logInBtn);

    //Skapa "registrera användare" knapp med länk till funktionen registerUserForm()
    const registerBtn = document.createElement("button");
    registerBtn.innerText = "Skapa ny användare"
    menu.appendChild(registerBtn);

    registerBtn.addEventListener("click", () => {
        console.log("Console log from registerBtn event listener");
        registerUserForm();
    })

    logInBtn.addEventListener("click", () => {
        function isUserRegistered() {
            let userName = nameField.value;
            let password = passField.value;

            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
            let savedPasswords = JSON.parse(localStorage.getItem("savedPasswords"));

            if (registeredUsers.indexOf(userName) === savedPasswords.indexOf(password) && registeredUsers.indexOf(userName) >= 0) {
                localStorage.setItem("userName", userName);
                localStorage.setItem("password", password);
                return true;
            }

            // if (userNames.indexOf(userName) === passwords.indexOf(password) && userNames.indexOf(userName) >= 0) {
            //     localStorage.setItem("userName", userName);
            //     localStorage.setItem("password", password);
            //     return true;
            // }
            
            
        }
        if (isUserRegistered()) {
            loggedInMenu();
            loggedInMain();

        } else {
            incorrectLogIn();
        }
    });

}

function notLoggedInMain() {

    let main = document.getElementById("main");
    main.innerText = 'Hej! Vänligen logga in genom att fylla i användarnamn och lösenord ovan och klicka på "Logga in", eller skapa en ny användare genom att klicka på "Skapa ny användare".';
}

function loggedInMenu() {

    emptyMenuRenderLogo();
    
    const logOffBtn = document.createElement("button");
    logOffBtn.innerText = "Logga ut"
    menu.appendChild(logOffBtn);


    logOffBtn.addEventListener("click", () => {
        emptyMenuRenderLogo();
        localStorage.removeItem("userName");
        localStorage.removeItem("password");
        notLoggedInMenu();
        notLoggedInMain();
    })
}

function registerUserForm() {
    
    emptyMenuRenderLogo()
    // Rubrik "Registrera ny användare med formuläret nedan"
    main.innerHTML = "";
    const registerHeader = document.createElement("h2");
    registerHeader.innerText = "Registrera ny användare";
    main.appendChild(registerHeader);

    // Inputs för användarnamn och lösenord
    const newUserNamePrompt = document.createElement("h3");
    newUserNamePrompt.innerText = "Användarnamn";
    main.appendChild(newUserNamePrompt);

    const newUserNameField = document.createElement("input");
    main.appendChild(newUserNameField);

    const newPasswordPrompt = document.createElement("h3");
    newPasswordPrompt.innerText = "Lösenord";
    main.appendChild(newPasswordPrompt);

    const newPasswordField = document.createElement("input");
    main.appendChild(newPasswordField);

    const br = document.createElement("br");
    main.appendChild(br);

    const newUserBtn = document.createElement("button");
    newUserBtn.innerText ="Registrera";
    main.appendChild(newUserBtn);

    newUserBtn.addEventListener("click", () => {
        console.log("Console log from newUserBtn EventListener");
        registerNewUser();
    })
    function registerNewUser() {

        console.log("Console log from registerNewUser()");
        const newUserName = newUserNameField.value;
        console.log(newUserName);

        const newPassword = newPasswordField.value;
        console.log(newPassword);

        if (newUserName && newPassword) {
        let currentUserList = JSON.parse(localStorage.getItem("registeredUsers"));

        let currentPasswords = JSON.parse(localStorage.getItem("savedPasswords"));

        currentUserList.push(newUserName);
        console.log(currentUserList);

        currentPasswords.push(newPassword);
        console.log(currentPasswords);

        localStorage.setItem("registeredUsers", JSON.stringify(currentUserList));

        localStorage.setItem("savedPasswords", JSON.stringify(currentPasswords));

        registrationConfirmed();
        
        }
        
    }
}

function loggedInMain() {

    let userName = localStorage.getItem("userName");
    console.log("userName från loggedInMain", userName);
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = `Hej ${userName}! Välkommen till inloggat läge.`;
}

function incorrectLogIn() {

    console.log("Console log från incorrectLogIn()");
    let main = document.getElementById("main");
    main.innerText = "Användarnamnet eller lösenordet är felaktigt. Vänligen försök igen.";
}

function emptyMenuRenderLogo() {
    document.getElementById("menu").innerHTML = "";
    const logo = document.createElement("h1");
    logo.innerText = "Fort Knox"
    menu.appendChild(logo);

}

function registrationConfirmed() {
    notLoggedInMenu();
    let main = document.getElementById("main");
    const registeredHeader = document.createElement("h2");
    main.innerHTML = "";
    registeredHeader.innerText = "Användare registrerad";
    main.appendChild(registeredHeader);
}

