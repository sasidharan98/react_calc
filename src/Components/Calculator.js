import React, { useState, useEffect } from 'react';
import '../Stylesheets/Calculator.css';
import '../style.css';
const Calculator = () => {
  let [currElement, setcurrElement] = useState('0');
  let [prevElement, setprevElement] = useState('');
  let [operator, setOperator] = useState('');
  let [decimal, setdecimalOperator] = useState('0');
  const Handler = event => {
    const values = event.target;
    if (values.className === 'number' && values.innerHTML !== '.') {
      setcurrElement(() => {
        currElement += values.innerHTML.toString();
        currElement = parseFloat(currElement);
        return (currElement = currElement.toString());
      });
      console.log(currElement);
    }
    if (values.className === 'operand') {
      setOperator(() => {
        if (operator !== '') {
          return operator;
        } else {
          return (operator = values.innerHTML);
        }
      });
      chooseOperation(operator);
      setprevElement((prevElement = currElement));
      setcurrElement((currElement = ''));
      setOperator((operator = values.innerHTML));
    }
    if (values.innerHTML === '.') {
      setcurrElement(() => {
        if (currElement.includes('.')) {
          console.log('1');
          return currElement;
        } else {
          console.log(currElement.slice(-1));
          return (currElement += values.innerHTML);
        }
      });
    }
    if (values.innerHTML === '=') {
      compute(operator);
    }
    if (values.innerHTML === 'AC') {
      clear();
    }
    if (values.innerHTML === 'DEL') {
      setcurrElement((currElement = currElement.toString().slice(0, -1)));
    }
  };
  const chooseOperation = operand => {
    if (currElement === '') return;
    if (prevElement != '') {
      compute(operand);
    }
  };
  const compute = operand => {
    let computation;
    const prevValue = parseFloat(prevElement);
    const currValue = parseFloat(currElement);
    console.log(prevValue, currValue, operand);
    if (isNaN(prevValue) || isNaN(currValue)) return;
    switch (operand) {
      case '*':
        computation = prevValue * currValue;
        break;
      case '-':
        computation = prevValue - currValue;
        break;
      case '+':
        computation = prevValue + currValue;
        break;
      case '/':
        computation = prevValue / currValue;
        break;
      default:
        return;
    }
    setcurrElement((currElement = computation));
    setprevElement((prevElement = ''));
    setOperator((operator = ''));
  };
  const clear = () => {
    setprevElement((prevElement = ''));
    setcurrElement((currElement = ''));
    setOperator((operator = ''));
  };
  useEffect(() => {
    setdecimalOperator(
      (decimal = currElement.toLocaleString('en', {
        maximumFractionDigits: 0
      }))
    );
    console.log('effect');
  }, [currElement]);

  return (
    <>
      <div className="calculator-body">
        <div className="output">
          <div className="previousOperationText">{prevElement}</div>
          <div className="operand">{operator}</div>
          <div className="currentOperationText">{decimal}</div>
        </div>
        <div className="operators" onClick={Handler}>
          <button className="allClear span-two">AC</button>
          <button className="delete">DEL</button>
          <button className="operand">/</button>
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="operand">*</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="operand">-</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
          <button className="operand">+</button>
          <button className="number">0</button>
          <button className="number">.</button>
          <button className="equals span-two">=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
