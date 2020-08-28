

function generateMatrix(N) {
    let matrix = [];

    for (let i = 0; i < N; i++) {
        let arr = []
        for (let j = 0; j < N; j++) {
            arr.push(Math.round(Math.random()))
        }
        matrix.push(arr)
    }
    return matrix
}

function main(N) {

    let board = generateMatrix(N)
    let newArr = [...board]
    let target = newArr.sort(() => Math.random() - 0.5)
    console.log(board, target)
}


main(N)
/*
N -> Number of rows and columns

Time Complexity : O(N^2)
Space Complexity : O(N)

*/

