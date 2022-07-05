import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import {Sections} from './components/Sections';
import home from './data/home.json';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Sections sections={home.sections}/>
      </main>
    </div>
  );
}

export default App;
