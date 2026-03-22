function selecionar(card, local) {
    const mapa = document.getElementById("mapaFrame");

    // Atualiza mapa
    mapa.src = "https://maps.google.com/maps?q="
        + encodeURIComponent(local)
        + "&output=embed";

    // Destaca card selecionado
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
}