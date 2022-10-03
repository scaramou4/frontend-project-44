import game_dialogue from "./game_dialogue.js";
import askName from "./askName.js";

const gameParams = () => {
  let question, correctAnswer, operation, argument1, argument2
  operation = Math.floor(Math.random() * 3);
  argument1 = Math.floor(Math.random() * 100);
  argument2 = Math.floor(Math.random() * 100);
  if (operation === 0) { // plus
    question = `${argument1} + ${argument2}`;
    correctAnswer = argument1 + argument2;
  }
  else
  if (operation === 1) { // minus
    question = `${argument1} - ${argument2}`;
    correctAnswer = argument1 - argument2;
  } else {  //multiply
    question = `${argument1} * ${argument2}`;
    correctAnswer = argument1 * argument2;
  }
  return [question, correctAnswer.toString()];
};

export default () => {
  let name = askName(), counter = 0, result;
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const gamePars = gameParams();
    result = game_dialogue(gamePars[0], gamePars[1]);
    if (result === 1) {
      counter += 1;
    } else {
      console.log(`Let\'s try again, ${name}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
}