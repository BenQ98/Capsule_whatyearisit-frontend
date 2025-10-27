console.log("Hello ...")

fetch("https://capsule-whatyearisit-backend.vercel.app/year")
    .then(response => response.json())
    .then(data => {
        document.querySelector("h1").textContent = data.year;
        console.log(data);
    })