import logo from './logo.svg';
import './App.css';

const sayHello = (name) => <h1>Hello, {name} !</h1>;

// function sayHello(name) {
//   return <h1>Hello, {name} !</h1>
// }

function App() {
  return (
    sayHello('John')
  );
}

export default App;