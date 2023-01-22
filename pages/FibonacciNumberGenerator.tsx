import React, { useState } from 'react';

const FibonacciNumberGenerator = () => {
  const [input, setInput] = useState('');
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);
  const [error, setError] = useState('');
  const [showButton, setShowButton] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!Number.isInteger(+input) || +input < 0) {
      setError('Please enter a positive integer');
      return;
    }

    setError('');
    setFibonacciNumbers([1,1]);
    setShowButton(true);
  };

  const handleNextNumber = () => {
    const nextNumber = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];
    setFibonacciNumbers([...fibonacciNumbers, nextNumber]);

    if (fibonacciNumbers.length === +input) {
      setShowButton(false);
    }
  };

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
              <p key={idx}>{num}</p>
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
