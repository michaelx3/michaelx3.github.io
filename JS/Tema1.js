const board = document.getElementById('board');
const cells = board.getElementsByClassName('cell');
let currentPlayer = 'X';
let boardState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
let gameEnded = false;

const winPatterns = [
  // Rows
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  // Columns
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  // Diagonals
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]],
];

const questions = [
  {
    question: "Pregunta 1",
    answer: "1"
  },
  {
    question: "Pregunta 2",
    answer: "2"
  },
  {
    question: "Pregunta 3",
    answer: "3"
  },
  {
    question: "Pregunta 4",
    answer: "4"
  },
  {
    question: "Pregunta 5",
    answer: "5"
  },
  {
    question: "Pregunta 6",
    answer: "6"
  },
  {
    question: "Pregunta 7",
    answer: "7"
  },
];

let usedQuestions = []; // Arreglo para almacenar preguntas utilizadas

function getRandomQuestion() {
  const unusedQuestions = questions.filter(question => !usedQuestions.includes(question));
  if (unusedQuestions.length === 0) {
    // Todas las preguntas han sido utilizadas, reiniciamos el arreglo usedQuestions
    usedQuestions = [];
    return questions[Math.floor(Math.random() * questions.length)];
  } else {
    return unusedQuestions[Math.floor(Math.random() * unusedQuestions.length)];
  }
}

function askQuestion() {
  const questionObj = getRandomQuestion();
  const question = questionObj.question;
  const answer = questionObj.answer;
  const playerAnswer = prompt(question);
  if (playerAnswer === answer) {
    usedQuestions.push(questionObj); // Agregamos la pregunta al arreglo de preguntas utilizadas
    return true;
  } else {
    return false;
  }
}

function checkWinner() {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      boardState[a[0]][a[1]] === boardState[b[0]][b[1]] &&
      boardState[a[0]][a[1]] === boardState[c[0]][c[1]] &&
      boardState[a[0]][a[1]] !== ''
    ) {
      cells[a[0] * 3 + a[1]].classList.add('winner-symbol');
      cells[b[0] * 3 + b[1]].classList.add('winner-symbol');
      cells[c[0] * 3 + c[1]].classList.add('winner-symbol');
      gameEnded = true;
      const resultMessage = document.getElementById('result-message');
      resultMessage.textContent =`¡El equipo ${currentPlayer} ha ganado!`;
      return true;
    }
  }
  return false;
}

function checkDraw() {
  for (const row of boardState) {
    for (const cell of row) {
      if (cell === '') {
        return false;
      }
    }
  }
  return true;
}

function handleMove(row, col) {
  if (!gameEnded && boardState[row][col] === '') {
    if (askQuestion()) {
      boardState[row][col] = currentPlayer;
      cells[row * 3 + col].innerText = currentPlayer;
      if (checkWinner()) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      } else if (checkDraw()) {
        gameEnded = true;
        setTimeout(() => {
          alert('¡Es un empate!');
        }, 100);
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    } else {
      alert('Respuesta incorrecta. Pierdes el turno.');
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

const titleContainer = document.querySelector('.title-container');

titleContainer.addEventListener('animationend', () => {
  titleContainer.classList.add('stop-animation');
});

function resetBoard() {
  currentPlayer = 'X';
  boardState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  for (const cell of cells) {
    cell.innerText = '';
    cell.classList.remove('winner-symbol');
  }
  gameEnded = false;
  const resultMessage = document.getElementById('result-message');
  resultMessage.textContent = ''; // Eliminamos el contenido del mensaje del ganador
}
