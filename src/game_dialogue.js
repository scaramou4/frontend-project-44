import readlineSync from 'readline-sync';

export default (gameData, name) => {
    let counter = 0;
    let question;
    let correctAnswer;
    for (let i = 0; i < 3; i += 1) {
        question = gameData[i][0];
        correctAnswer = gameData[i][1];
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ').toString();
        if (answer === correctAnswer) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let\'s try again, ${name}!`);
            break;
        }
    }
    if (counter === 3) console.log(`Congratulations, ${name}!`);
}