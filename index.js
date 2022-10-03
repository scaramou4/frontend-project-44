import readlineSync from 'readline-sync';

export default (gameData, gameRules) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  let counter = 0;
  let question;
  let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    [question, correctAnswer] = gameData[i];
    console.log(`Question: ${question}`);
    // в следующей строке убрать хинт
    const answer = readlineSync.question(`Your answer (hint: ${correctAnswer}): `).toString();
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
};
