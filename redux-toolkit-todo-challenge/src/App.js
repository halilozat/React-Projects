import './App.css';
import Header from './components/Header.jsx'
import NotesArea from './components/NotesArea';
import Search from './components/Search.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <NotesArea />
    </div>
  );
}

export default App;
