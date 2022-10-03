import gameDialogue from '../index.js';

const gameParams = () => {
  const gameData = [];
  let question; let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    const operation = Math.floor(Math.random() * 3);
    const argument1 = Math.floor(Math.random() * 100);
    const argument2 = Math.floor(Math.random() * argument1);
    if (operation === 0) { // plus
      question = `${argument1} + ${argument2}`;
      correctAnswer = argument1 + argument2;
    } else if (operation === 1) { // minus
      question = `${argument1} - ${argument2}`;
      correctAnswer = argument1 - argument2;
    } else { // multiply
      question = `${argument1} * ${argument2}`;
      correctAnswer = argument1 * argument2;
    }
    gameData[i] = [question, correctAnswer.toString()];
  }
  return gameData;
};

export default () => {
  const gameData = gameParams();
  const gameRules = 'What is the result of the expression?';
  gameDialogue(gameData, gameRules);
};
