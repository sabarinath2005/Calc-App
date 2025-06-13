import logo from './logo.svg';
import './App.css';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Multiplication from './components/Multiplication';
import Division from './components/Division';
import Voting from './components/Voting';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Addition/>}/>
      <Route path='/sub' element={<Subtraction/>}/>
      <Route path='/multi' element={<Multiplication/>}/>
      <Route path='/div' element={<Division/>}/>
      <Route path='/vote' element={<Voting/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;