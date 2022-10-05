import gameDialogue from '../index.js';

// функция проверки простое ли число
const isPrimeNumber = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const gameParams = () => {
  const gameData = [];
  let question; let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    question = Math.floor(Math.random() * (97)) + 3;
    correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
    gameData[i] = [question, correctAnswer.toString()];
  }
  return gameData;
};

export default () => {
  const gameData = gameParams();
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameDialogue(gameData, gameRules);
};
