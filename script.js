console.log("Hello ...")

fetch("http://localhost:3000/date")
    .then(response => response.json())
    .then(data => {
        document.querySelector("h1").textContent = data.year;
        console.log(data);
    })