const ticTacToe = {
    board: ['', '', '', '', '', '', '', '', '',], 

    gameOver: false,

    winner: '',

    score: [
        { x: 0, o: 0, draw: 0}, 
    ],

    difficulty: {easy: true, medium: false, impossible: false},

    option: {
        turn: 0,
        turns: 0,
        changeTurn() {turnPlay: this.turn === 0 ? this.turn = 1 : this.turn = 0},
        options: ['X', 'O'],
    },

    winnerOrDraw(winner) {
        this.gameOver = true
        this.winner = winner
        this.option.turns = 0
        this.option.turn = 0
        this.updateScore()
    },
    
    restartGame(restart = false) {
        if (restart) {
            this.score[0].x = 0
            this.score[0].o = 0
            this.score[0].draw = 0
        }

        this.board.fill('')
        this.gameOver = false
        this.option.turns = 0
        this.option.turn = 0
    }, 

    updateScore() {
        if(this.winner === 'X') {
          this.score[0].x++
        } else if(this.winner === 'O') {
          this.score[0].o++
        } else {
            this.score[0].draw++
        }

      },

    possibleWins: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    //IA
    machineTime() {
        let randomNumber 

        do {
            randomNumber = Math.floor(Math.random() * (8 - 0) + 0)
        } while(this.board[randomNumber] !== '')


        if(this.option.turns === 1 && this.difficulty.impossible) {
            if(this.board[4] === 'X') {
                randomNumber = 6
            } else {
                randomNumber = 4
            }
        }

        this.possibleWins.forEach(e => {
            //Block player
            if(this.difficulty.medium || this.difficulty.impossible) {
                if(this.board[e[0]] === 'X' && this.board[e[0]] === this.board[e[1]] && this.board[e[2]] === '') {
                    randomNumber = e[2]
                } else if(this.board[e[0]] === 'X' && this.board[e[0]] === this.board[e[2]] && this.board[e[1]] === '') {
                    randomNumber = e[1]
                } else if(this.board[e[1]] === 'X' && this.board[e[1]] === this.board[e[2]] && this.board[e[0]] === '') {
                    randomNumber = e[0]
                }
            }

            //Machine Win
            if(this.board[e[0]] === 'O' && this.board[e[0]] === this.board[e[1]] && this.board[e[2]] === '') {
                randomNumber = e[2]
            } else if(this.board[e[0]] === 'O' && this.board[e[0]] === this.board[e[2]] && this.board[e[1]] === '') {
                randomNumber = e[1]
            } else if(this.board[e[1]] === 'O' && this.board[e[1]] === this.board[e[2]] && this.board[e[0]] === '') {
                randomNumber = e[0]
            }

        })

        this.makePlay(randomNumber)
    },

    makePlay(position) {
        if(this.board[position] !== '') return false
        this.option.turns++
        this.board[position] = this.option.options[this.option.turn] 
        this.option.changeTurn()
        this.checkWin()

        if(this.option.turns === 9 && this.gameOver === false) {
            this.winnerOrDraw('Draw')
        }
        return this.board
    },

    checkWin() {
        this.possibleWins.forEach((e) => {
            if(this.board[e[0]] !== '' && this.board[e[0]] === this.board[e[1]] && this.board[e[1]] === this.board[e[2]]) {
                this.winnerOrDraw(this.board[e[0]])
            } else {return false}
    
        })
    },
}

export default ticTacToe
