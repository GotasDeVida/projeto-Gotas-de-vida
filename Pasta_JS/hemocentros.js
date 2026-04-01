function selecionar(card, local) {
    const mapa = document.getElementById("mapaFrame");

    mapa.src = "https://maps.google.com/maps?q="
        + encodeURIComponent(local)
        + "&output=embed";

    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
}