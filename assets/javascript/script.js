
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

