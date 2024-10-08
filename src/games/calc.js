import { getRandomNumber } from '../utils.js';
import runGameLogic, { roundsNumber } from '../gameLogic.js';

const description = 'What is the result of the expression?';

const getRandOperator = () => {
const operators = ['+', '-', '*'];
const randOperatorIndex = getRandomNumber(0, operators.lenght - 1);
return operators [randOperatorIndex];
};

const calculate = (operator, operand1, operand2) => {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-': 
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        default:
            return Error('Incorrect operator');      
    }
};

const generateRound = () => {
    const firstOperand = getRandomNumber(1, 100);
    const secondOperand = getRandomNumber(1, 100);
    const operator = getRandOperator();
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    const correctAnswer = String(calculate(operator, firstOperand, secondOperand));
    return [question, correctAnswer];
};

const runCalcGame = () => {
    const rounds = [];
    for (let i = 0; i < roundsNumber; i += 1){
        rounds[i] = generateRound();
    }
    return runGameLogic(rounds, description);
};
export default runCalcGame;