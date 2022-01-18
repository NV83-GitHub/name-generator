let btn = document.getElementById('b1')
let outputPrenom = document.getElementById("prenom")
let outputNom = document.getElementById("nom")
let outputPower = document.getElementById("power")
let mugShot = document.getElementById('img')

let prenoms = [
    "Yoram",
    "Geuran",
    "Joran",
    "Yolamn",
    "Yolander",
    "Royam",
    "Gitan",
]

let noms = [
    "Lindhommm",
    "Londinhum",
    "Lind",
    "Rimdon",
    "Lindheunm",
]

let powers = [
    "Braquage",
    "Embrouille",
    "Rédiger des Recommandés",
    "Incendie criminel",
    "Vente de caravanes",
    "Smoothies",
    "Rouler sans permis",
    "Rouler sans assurance",
    "Backseat Driver",
    "SmartAss",
]

let mugShots = [
    "./img/Yo1.png",
    "./img/Yo2.png",
    "./img/Yo3.png",
    "./img/Yo4.png",
]

btn.addEventListener("click", () => {
    let randomPrenom = prenoms[Math.floor(Math.random() * prenoms.length)]
    
    let randomNom = noms[Math.floor(Math.random() * noms.length)]
    
    let randomPower = powers[Math.floor(Math.random() * powers.length)]

    let randomMugShot = mugShots[Math.floor(Math.random() * mugShots.length)]
    
    outputPrenom.innerText = randomPrenom
    outputNom.innerText = randomNom
    outputPower.innerText = randomPower
    mugShot.src = randomMugShot
})