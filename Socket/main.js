let messages = [];
let username = prompt("Enter a username: ");
const message_limit = 15;

function send(){
    let text = document.getElementById("textarea").value;
    console.log(`text`);
    // document.getElementById("tdisplay").innerHTML = text;

    if (messages.length >= message_limit) {
        messages.shift();
    }
    messages.push({
        sender: username,
        message_text: text
    });

    display_messages();


    document.getElementById("textarea").value = "";
}

function recieve(){
    
}

function display_messages() {
    document.getElementById("display").innerHTML = ""
    for (let msg of messages) {
        let container = document.getElementById("display");
        let disp = document.createElement("div");
        let d = document.createTextNode(`${msg.sender}: ${msg.message_text}`);

        disp.className = "message";
        disp.appendChild(d);
        container.appendChild(disp);
    }
}
