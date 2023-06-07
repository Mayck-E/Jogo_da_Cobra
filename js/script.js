//criar elemento que irá rodar o jogo
let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32

//criar cobrinha como vetor, já que ela vai passar por uma serie de cordenadas, quando pintadas criam os quadradinhos

let snake = []


//inicio da cobrinha 
snake[0] = {
    x: 8 * box, y: 8 * box
}

//direção
let direction = "rigth"

//comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, y: Math.floor(Math.random() * 15 + 1) * box,
}

//função para criar o background
function criarGB(){
    context.fillStyle = "ligthgreen"
    //denha o retnagulo usando X e Y e a largura setadas
    context.fillRect(0, 0, 16 * box, 16 * box)
}

//função para criar a cobrinha
function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

//função Principal
function iniciarJogo() {
    if (snake[0].x > 15 * box && direction == "right") {
        snake[0].x = 0
    }
    if (snake[0].x < 0 * box && direction == "left") {
        snake[0].x = 16 * box
    }
    if (snake[0].x > 15 * box && direction == "down") {
        snake[0].x = 0
    }
    if (snake[0].x < 0 * box && direction == "up") {
        snake[0].x = 16 * box
    }

    criarGB()
    criarCobrinha()
    drawFood()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    
    if(direction == "right") snakeX += box
    if(direction == "left") snakeX += box
    if(direction == "up") snakeY += box
    if(direction == "down") snakeY += box

    let newHead ={
        x: snakeX, y: snakeY
    }

    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha

}
