const player_one_score = document.querySelector('#player-one-score');
const player_two_score = document.querySelector('#player-two-score');

const player_one = document.querySelector('#player-one');
const player_two = document.querySelector('#player-two');
const reset = document.querySelector('#reset');

const scoreNum = document.querySelector('#game-select');

let updateScore1 = 0;
let updateScore2 = 0;

let winningScore = 5;
let isGameOver = false;

scoreNum.addEventListener('change', function(e){
    winningScore = parseInt(this.value);
    resetGame();
})

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

reset.addEventListener('click', resetGame)

function resetGame() {
    isGameOver = false;
    updateScore1 = 0;
    updateScore2 = 0;
    player_one_score.textContent = 0;
    player_two_score.textContent = 0;
    player_one_score.classList.remove('winner', 'loser');
    player_two_score.classList.remove('winner', 'loser');
}