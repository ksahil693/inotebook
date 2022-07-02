import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <>
    <NoteState>
      <Router>
      <NavBar/>
      <div className="container">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>

      </div>
      </Router>
      </NoteState>
    </>
  );

  
}

export default App;
