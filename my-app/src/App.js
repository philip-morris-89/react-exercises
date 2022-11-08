import logo from './logo.svg';
import './App.css';

// Write a function that receives two parameters, a and b and returns the sum of them within an h2 tag.

function App() {
  const sum = (a, b) => a + b;
  
  return (
    <h2>{sum('Hello,',' World!')}</h2>
  );
}

export default App;
