import gameDialogue from '../index.js';

// функция создания прогрессии
const createProgression = () => {
  const result = [];
  let start = Math.floor(Math.random() * 20);
  const step = Math.floor(Math.random() * 10);
  for (let i = 0; i < 10; i += 1) {
    result.push(start);
    start += step;
  }
  return result;
};

const gameParams = () => {
  const gameData = [];
  let question; let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    const progression = createProgression();
    const secretPosition = Math.floor(Math.random() * 10);
    correctAnswer = progression[secretPosition];
    progression[secretPosition] = '..';
    question = progression.join(' ');
    gameData[i] = [question, correctAnswer.toString()];
  }
  return gameData;
};

export default () => {
  const gameData = gameParams();
  const gameRules = 'What number is missing in the progression?';
  gameDialogue(gameData, gameRules);
};
