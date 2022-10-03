import askName from "../src/askName.js";
import game_dialogue from "../index.js";

const gameParams = () => {
    const gameData =[];
    let question, correctAnswer;
    for (let i = 0; i < 3; i += 1) {
        question = Math.floor(Math.random() * 100);
        correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
        gameData[i] = [question, correctAnswer]
    }
    return gameData;
};

export default () => {
    let name = askName();
    let gameData= gameParams();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    game_dialogue(gameData, name);
}