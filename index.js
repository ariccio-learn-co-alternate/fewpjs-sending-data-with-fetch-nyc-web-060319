// Add your code here
function submitData(name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
    }).then((response) => {return response.json();}).then((response) => {
        console.log("response: ");
        console.log(response);
        // const newElem = document.createElement("p");
        // newElem.innerHTML = response.id;
        // document.querySelector("body").appendChild(newElem);
        document.body.innerHTML += `<div>${response.id}</div>`;
    }).catch((error) => {
        document.body.innerHTML += `<div>${error.message}</div>`;
    });

    console.log(document.body.innerHTML);
}