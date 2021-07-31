
import './App.css';
import Age from './components/Age';
import Book from './components/Book';
import Length from './components/Length';

function App() {
  return (
    <div className="App">
    <Age year ='2002'/>
    <Book name ='Alchemist' author='Paulo Coelho' />
    <Length example = "funny summer also right left;"/>

    </div>
  );
}

export default App;
