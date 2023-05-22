import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
