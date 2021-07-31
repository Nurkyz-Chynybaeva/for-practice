
import './App.css';
import Age from './components/Age';
import Book from './components/Book';
import Length from './components/Length';
import LowerCase from './components/LowerCase';
import UpperCase from './components/UpperCase';

function App() {
  return (
    <div className="App">
    <Age year ='2002'/>
    <Book name ='Alchemist' author='Paulo Coelho' />
    <Length example = "funny summer also right left;"/>
<LowerCase>HELLO, HOW ARE YOU?</LowerCase>
<UpperCase>hello, how are you?</UpperCase>

    </div>
  );
}

export default App;
