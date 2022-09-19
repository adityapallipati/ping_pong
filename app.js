const reset = document.querySelector('#reset');
const scoreNum = document.querySelector('#game-select');

let winningScore = 5;
let isGameOver = false;

const player_one = {
    score: 0,
    button: document.querySelector('#player-one'),
    display: document.querySelector('#player-one-score')
}

const player_two = {
    score: 0,
    button: document.querySelector('#player-two'),
    display: document.querySelector('#player-two-score')
}

function updateScores(player, opponent){
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

player_one.button.addEventListener('click', function () {
    updateScores(player_one,player_two);
})

player_two.button.addEventListener('click', function () {
    updateScores(player_two, player_one);
})

reset.addEventListener('click', resetGame)

function resetGame() {
    isGameOver = false;

    for (let p of [player_one,player_two]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner','loser');
        p.button.disabled = false;
    }
}

scoreNum.addEventListener('change', function(e){
    winningScore = parseInt(this.value);
    resetGame();
})


/*

player_one.addEventListener('click', function(e){
    if (!isGameOver){
        updateScore1+=1;
       if (updateScore1 === winningScore) {
        isGameOver = true;
        player_one_score.classList.add('winner');
        player_two_score.classList.add('loser');
    }
    player_one_score.textContent = updateScore1;
    console.log(e)
}
})

player_two.addEventListener('click', function(e){
    if (!isGameOver){
        updateScore2+=1;
    if (updateScore2 === winningScore){
        isGameOver = true;
        player_one_score.classList.add('loser');
        player_two_score.classList.add('winner');
    }
    player_two_score.textContent = updateScore2;
}
    console.log(e)
})

*/