board = ['X', 'O', 'X', 'O', '', '', '', 'X', '']
//        0    1    2    3   4    5   6   7    8      4-5-6-8
function machineTime() {
    let randomNumber

    do {
        randomNumber = Math.floor(Math.random() * (8 - 0) + 0)
        console.log(randomNumber)
    } while(board[randomNumber] !== '')



    // while(board[randomNumber] !== 'X') {
    //     randomNumber = Math.floor(Math.random() * (8 - 0) + 0)
    //     if(board[randomNumber] === 'O') {
    //         randomNumber = 0
    //     }
    //     console.log(randomNumber)
    // }
    console.log(this.board[randomNumber])
}

machineTime()