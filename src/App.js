import './App.css';
import Navbar from './components/Navbar';
import Main from  './components/Main';
import Courses from './components/Course';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Main/>
    <Courses/>
    </div>
  );
}

export default App;