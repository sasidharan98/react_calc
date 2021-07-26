import React, { useState } from 'react';
import '../Stylesheets/Calculator.css';
import '../src/style.css';
const Calculator = () => {
  let [currElement, setcurrElement] = useState('');
  let [prevElement, setprevElement] = useState('');
  const Handler = event => {
    const values = event.target;
    console.log(values.className);
    if (values.className === 'number') {
      setcurrElement((currElement += values.innerHTML.toString()));
    }
    if (values.className === 'operand') {
      setprevElement((prevElement += currElement));
      chooseOperation(values.innerHTML);
    }
    if (values.innerHTML === '=') {
      compute(values);
    }
    if (values.innerHTML === 'AC') {
      clear();
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
    if (isNaN(prevValue) || isNaN(currValue)) return;
    switch (operand) {
      case '*':
        computation = prevValue * currValue;
        break;
    }
    setcurrElement((currElement = computation));
  };
  const clear = () => {
    setprevElement((prevElement = ''));
    setcurrElement((currElement = ''));
  };
  return (
    <>
      <div className="calculator-body">
        <div className="output">
          <div className="previousOperationText">{prevElement}</div>
          <div className="currentOperationText">{currElement}</div>
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
