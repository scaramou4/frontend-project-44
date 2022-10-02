import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  game(name);
};

const game = (name) => {
  let counter = 0;
  let guessedNumber;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    guessedNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${guessedNumber}`);
    const correctAnswer = (guessedNumber % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
}