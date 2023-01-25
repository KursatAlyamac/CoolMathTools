import React, { useState, useEffect } from 'react';

const FibonacciNumberGenerator = () => {
  const [input, setInput] = useState('');
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);
  const [error, setError] = useState('');
  const [showButton, setShowButton] = useState(true);
  const [iter, setIter] = useState(fibonacciIterator());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setIter(fibonacciIterator());
  }, [input]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!Number.isInteger(+input) || +input < 0) {
      setError('Please enter a positive integer');
      return;
    }

    setError('');
    setFibonacciNumbers([]);
    setShowButton(true);
  };

  const handleNextNumber = () => {
    if (fibonacciNumbers.length === +input) {
      setShowButton(false);
    } else {
      setFibonacciNumbers([...fibonacciNumbers, iter.next().value]);
    }
  };

  function* fibonacciIterator() {
    let a = 0, b = 1;
    while (true) {
      let current = a;
      a = b;
      b = current + b;
      yield current;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter n:
          <input type="text" value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Generate</button>
      </form>
      {error && <p>{error}</p>}
      {fibonacciNumbers.length > 0 && (
        <div>
          <p>Fibonacci Numbers:</p>
          <ul>
            {fibonacciNumbers.map((num, idx) => (
              <li key={idx}>{num}</li>
            ))}
          </ul>
          {showButton && (
            <button type="button" onClick={handleNextNumber}>
              Give me the next number
            </button>
          )}
          {!showButton && <p>That's all your Fibonacci numbers</p>}
        </div>
      )}
    </div>
  );
}

export default FibonacciNumberGenerator;
