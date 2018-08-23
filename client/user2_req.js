let send = document.getElementsByTagName("button")[0],
    content = document.getElementsByTagName("ul")[0];

let socket = io("http://localhost:8080");
socket.on('receive', function (data) {
    console.log("i get a msg");

    let li = document.createElement("li");
    li.className = "right";
    li.innerText = data;
    content.appendChild(li);
});

function sendMsg() {
    let msg = document.getElementById("msg").value;

    let li = document.createElement("li");
    li.className = "left";
    li.innerText = msg;
    content.appendChild(li);

    socket.emit('send', msg);

    document.getElementById("msg").value = "";
}

send.addEventListener('click', sendMsg, false);