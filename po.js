
// Affiche la popup pour partager son score
function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")

    // rend visible la popup vu qu'elle est masquée par défaut dans le css (display:none)
    popupBackground.classList.add("active")
}


// Cache la popup pour partager son score.
function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")

    // supprimer la classe "active" rétablit l'affichage par défaut.
    popupBackground.classList.remove("active")
}


// Cette fonction initialise les écouteurs d'événements qui concernent 
// l'affichage de la popup.
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "partager"
    btnPartage = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton "Partager", on affiche la popup
        afficherPopup()
    })

    popupBackground.addEventListener("click", (event) => {
        // Si on a cliqué précisement sur la popupBackground
        // (et pas un autre élément qui se trouve dedans)
        if (event.target === popupBackground) {
            // Alors on cache la popup
            cacherPopup()
        }
    })
}