import gameDialogue from '../index.js';

const gameParams = () => {
  const gameData = [];
  let question; let
    correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    question = Math.floor(Math.random() * 100);
    correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    gameData[i] = [question, correctAnswer];
  }
  return gameData;
};

export default () => {
  const gameData = gameParams();
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameDialogue(gameData, gameRules);
};
