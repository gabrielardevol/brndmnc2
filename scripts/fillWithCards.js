const card = () => {
    const card = document.createElement("div")
    card.innerHTML = '<div><div class="brndmnc-card"><div><div class="card-pfp" onclick="unfoldLayout()"></div><ul style="font-size: smaller;"><li><i class="fa-solid fa-instagram"></i>&nbsp;grabribriel</li><li style="flex-direction: column;">Hombre, 26 años <span style="font-size: x-small;"><img class="flag" src="https://www.emca-online.eu/assets/flags/4x3/es.svg" alt=""> España </span></li><li>Arte, Deporte</li></ul></div><div style="width: 100%"><h4 style="font-size: medium; font-weight: 600;">Grabribriel</h4><ul><li><span><i class="fa-solid fa-users"></i>&nbsp; Audiencia:</span><span> 33.6K</span></li><li><span><i class="fa-solid fa-user-xmark"></i>&nbsp; Fakes:</span><span> 665</span></li><li><span><i class="fa-solid fa-heart"></i>&nbsp; Media Eng:</span><span> 1.87K</span></li><li><span><i class="fa-solid fa-heart-pulse"></i>&nbsp; Eng Rate:</span><span> 5.40%</span></li><li><span><i class="fa-solid fa-eye"></i>&nbsp; Impresiones:</span><span> 28.34K</span></li></ul></div></div></div>'
    const grid = document.querySelector("#cards-grid")
    grid.appendChild(card)
}

for (let i = 0; i < 20; i++) {
    card();
}   