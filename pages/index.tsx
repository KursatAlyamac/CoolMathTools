import Head from 'next/head'
import styles from '../styles/Home.module.css';
import FibonacciNumberGenerator from './FibonacciNumberGenerator';

const MathTools = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Math Tools</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>

      </header>
      <main>
        <h1>Welcome to Math Tools</h1>
        <p>A collection of online tools to help with all your math needs.</p>
        <h2>Fibonacci Number Generator</h2>
        <FibonacciNumberGenerator />
      </main>
      
      <footer>
       
      </footer>
    </div>
  )
}

export default MathTools
