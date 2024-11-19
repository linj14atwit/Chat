let messages = [];
const message_limit = 25;

function send(){
    let text = document.getElementById("textarea").value;
    console.log(text);
    // document.getElementById("tdisplay").innerHTML = text;

    if (messages.length >= message_limit) {
        messages.shift();
    }
    
    messages.push(text);

    display_messages();


    document.getElementById("textarea").value = "";
}

function recieve(){
    
}

function display_messages(){
    document.getElementById("display").innerHTML = ""
    for (let msg of messages) {
        let container = document.getElementById("display");
        let disp = document.createElement("div");
        let d = document.createTextNode(msg);

        disp.appendChild(d);
        container.appendChild(disp);
    }
}
