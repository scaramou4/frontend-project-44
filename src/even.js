import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  game(name);
};
console.log('Answer "yes" if the number is even, otherwise answer "no".');

    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
}