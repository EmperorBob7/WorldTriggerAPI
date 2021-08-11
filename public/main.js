const docInfo = [
    {
        "type": "GET",
        "command": "/characters",
        "description": "Returns a list of all Border members by Squad, or alone if not in a known Squad",
        "JSON": "data.TachikawaSquad"
    },
    {
        "type": "GET",
        "command": "/getOC/{ID}",
        "description": "Get an OC saved using my ocmaker with a unique ID."
    },
    {
        "type": "POST",
        "command": "/updateOC",
        "description": "Update an OC"
    }
];

window.onload = () => {
    let docs = document.querySelector("#docs");
    for (let i = 0; i < docInfo.length; i++) {
        let data = docInfo[i];

        let el = document.createElement("doc-container");
        el.classList.add(data.type);

        let type = document.createElement("type");
        type.innerText = data.type;
        type.classList.add(data.type);

        let command = document.createElement("command");
        command.innerText = data.command;

        let desc = document.createElement("description");
        desc.innerText = data.description;

        let json = document.createElement("JSON");
        json.innerText = data.JSON;
        
        el.appendChild(type);
        el.appendChild(command);
        el.appendChild(desc);
        //el.appendChild(json);

        docs.appendChild(el);
    }
};

function req() {
    fetch("/characters")
        .then(response => response.json())
        .then(data => console.log(data));
}