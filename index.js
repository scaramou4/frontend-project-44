import readlineSync from 'readline-sync';


export default (question, correctAnswer) => {
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === correctAnswer) {
            console.log('Correct!');
            return 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            return 0;
        }
}