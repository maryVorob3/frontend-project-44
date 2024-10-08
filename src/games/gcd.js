import { getRandomNumber } from '../utils.js';
import runGameLogic, {roundsNumber} from '../gameLogic.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
    if (num1 === 0) {
        return num2;
    }
    return getGcd(num2 % num1, num1);
} ; 

const generateRound = () => {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const correctAnswer = String(getGcd(firstNumber,secondNumber));
    const question = `${firstNumber} ${secondNumber}`;
    return [question, correctAnswer];
};

const runEvenGame = () => {
    const rounds = [];
    for (let i = 0; i < roundsNumber; i += 1) {
        rounds[i] = generateRound();
    }
    return runGameLogic(rounds, description);
};

export default runEvenGame;