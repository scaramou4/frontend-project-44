import game_dialogue from "../index.js";
import askName from "../src/askName.js";

const gameParams = () => {
  const gameData =[];
  for (let i = 0; i < 3; i += 1) {
    let question, correctAnswer, operation, argument1, argument2;
    operation = Math.floor(Math.random() * 3);
    argument1 = Math.floor(Math.random() * 100);
    argument2 = Math.floor(Math.random() * 100);
    if (operation === 0) { // plus
      question = `${argument1} + ${argument2}`;
      correctAnswer = argument1 + argument2;
    } else if (operation === 1) { // minus
      question = `${argument1} - ${argument2}`;
      correctAnswer = argument1 - argument2;
    } else {  //multiply
      question = `${argument1} * ${argument2}`;
      correctAnswer = argument1 * argument2;
    }
    gameData[i] = [question, correctAnswer.toString()]
  }
  return gameData;
};

export default () => {
  let name = askName();
  let gameData= gameParams();
  console.log('What is the result of the expression?');
  game_dialogue(gameData, name);
}