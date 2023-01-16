
let startQuiz = document.getElementById("start-quiz");

startQuiz.addEventListener("click", function(){
    let gameType = this.getAttribute("data-type");
    quizStart(gameType);
});

function quizStart(gameType){
    if (gameType === "fire") {
        displayFirePokemon();
    } else if (gameType === "water"){
        displayWaterPokemon();
    } else if (gameType === "grass"){
        displayGrassPokemon();
    }else {
        alert("You need to pick a type");
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function displayFirePokemon() {
    let fireTypes = {
        question : "",
        alternatives : "pickachu, charizard, blazikan, charmeleon",
        correctAnswer : 0,
        showPicture : ""}

    fireTypes[0].src = 'assets/images/pokemon-logo.png';
    let pokemonImage = document.getElementById("poke-image");
    pokemonImage.src = fireTypes[0].src;

}



