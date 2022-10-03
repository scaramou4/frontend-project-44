import gameDialogue from '../index.js';

// функция поиска наибольшего общего делителя
const gcd = (number1, number2) => {
  const stack = [1];
  for (let i = 2; i <= number1; i += 1) {
    stack.push(i);
    if ((number1 % i !== 0) || (number2 % i !== 0)) stack.pop();
  }
  return stack.pop();
};

const gameParams = () => {
  const gameData = [];
  let question; let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    const argument1 = Math.floor(Math.random() * 100);
    const argument2 = Math.floor(Math.random() * 100);
    question = `${argument1} ${argument2}`;
    correctAnswer = gcd(argument1, argument2);
    gameData[i] = [question, correctAnswer.toString()];
  }
  return gameData;
};

export default () => {
  const gameData = gameParams();
  const gameRules = 'Find the greatest common divisor of given numbers.';
  gameDialogue(gameData, gameRules);
};
