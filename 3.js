

function afficherResultat(score, nbMotsProposés){
// cette fonction affiche le résultat et le nombre total de mots proposés
    let spanScore = document.querySelector(".zoneScore span")

    let affichageScore = `${score} / ${nbMotsProposés}`
    spanScore.innerHTML = affichageScore
    console.log("Votre score est de " + score + " sur " + nbMotsProposés)
}



// Cette fonction demande à l'utilisateur de choisir entre 'mots' et 'phrases'
// Le "while" permet une répétition tant que les choix proposés n'ont pas été insérés
// On retourne la variable choix à la fin de la fonction
// La variable "choix" est une variable locale pour l'instant




   

// On utilise "ListePropositions" pour donner une fonction à la liste qu'elle devra utiliser 
// => on retourne ensuite le resultat pour trouver le score
// LE RESULTAT DOIT ETRE DEFINI ET INITIALISE A ZERO
// C'est une variable locale donc on redefinit la variable "score"
// on retourne la variable "score"



function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}

// Cette fonction construit et affiche l'email
// Une chaîne mailto a été crée. C'est un lien permettant de générer un 
// email et simplement dire à la page de suivre le lien
function afficherEmail (nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score AzerType&body=Salut, je suis ${nom} et je viens de réaliser le score${score} sur le site d'Azertype !`
    location.href = mailto
}

function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error(`le nom est trop court.`)
    } 
}
   
    //Pas de else parce que si je rentre dans le if,
    // je vais faire le return ce qui va stopper la fonction


function validerEmail() {
   let emailRegExp= new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+]")
   if (!emailRegExp.test(email)) {
    throw new Error(`L'email n'est pas valide.`)
   }
   
    // On met deux backslashs(\\) pour effectivement 
    // dire que l'on cherche que le point
}

function afficherMessageErreur(message){
    // recuperation du popup
    let popup = document.querySelector(".popup")

    let spanErreurMessage = document.getElementById("erreurMessage")

    // Creation du span
    //
    if (!spanErreurMessage){
        let spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"
    
        popup.append(spanErreurMessage)
    }
    spanErreurMessage.innerText = message
}

function gererFormulaire(scoreEmail){
    try {
        let baliseNom = document.getElementById("nom")
        nom = baliseNom.value
        validerNom(nom)

        let baliseEmail = document.getElementById("email")
        email = baliseEmail.value
        validerEmail(email)
        afficherMessageErreur("")
        afficherEmail(nom, email, scoreEmail)

    } catch(erreur) {
        // gerer l'erreur
        afficherMessageErreur(erreur.message)
    }
}

function LancerJeu () {
    initAddEventListenerPopup()
    let score = 0
    let i = 0
    let listeProposition = listeMots
    // mise d'une autre variable par un meme nom d'élément
    // "let listePropositions = listeMots va nous permettre de déclarer une condition au niveau de la liste des boutons "radio"

    let btnValiderMot = document.getElementById("btnValiderMot")
    console.log("Btnvzai")
    console.log(btnValiderMot)
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition(listeProposition[i])
    btnValiderMot.addEventListener("click", () =>{
        console.log(inputEcriture.value)
        if(inputEcriture.value === listeProposition[i]){
            score++
           
        }
        else {
            if (inputEcriture.value === ""){
                btnValiderMot[0].disabled = true
            }
        }    
        i++
        afficherResultat(score, i)
        inputEcriture.value = ''
        if (listeProposition[i] === undefined) {
            afficherProposition("le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeProposition[i]) 
        }
        
    
    })
       
        // on a aussi utiliser "afficherProposition" avant "addEventListener" pour ne pas que ça se declenche uniquement lorsque l'on clique sur le button
        // le "i++" permet l'augmentation du score total
        // Le mot undefined est écrit à la fin car mon code ne sait plus quoi écrire après la suite de mots proposés
        // L'emplacement de la condition "if(inputEcriture === listeMots[i] " est nécéssaire pour permettre l'evolution du score qq soit ce que l'utilisateur insère 
        // on copie le code "afficherResultat(score, i) pour que le "i" compte dans le nombre de mots proposés
    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for (let index = 0; index < listeBtnRadio.length; index++){
            console.log(listeBtnRadio[index].addEventListener("change", (event) =>{
                console.log(event.target.value)
                if (event.target.value === "1"){
                    listeProposition = listeMots
                } else{
                    listeProposition = ListePhrases
                }
                afficherProposition(listeProposition[i])
                // afficherProposition va permettre la mise à jour de la nouvelle liste
            })) 
        // on utilise la variable "index" à la place de "i" vu que i est déja utilisée
        //
        }

    // On écoute l'élément "submit "sur notre formulaire
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        let scoreEmail = `${score} / ${i}`
        gererFormulaire(scoreEmail)
    })

    afficherResultat(score, i)

// Cette fonction lie toutes les autres fonctions 
// Elle se sert de la fonction "ChoisirPhrasesOuMots" pour demander à l'utilisateur si il veut entrer la proposition 'mots' ou 'phrases'
// Une suite de mots/phrases est ensuite demandé(e) à l'utilisateur selon la proposition choisie
// La suite de mots/phrases est s'affiche grâce à la fonction "LancerBoucleDeJeu"
// => TOUT PART DE CETTE FONCTION
}
